from AI.NB import MultinominalNB
from AI.Prep import viet_to_eng, eng_to_vie

model = MultinominalNB()
model.load('./AI/Model/NB_model.npy')

# Get symptoms of a disease
def get_symptoms_disease(disease):
  return model.get_symptoms(disease)

# Get difference symptoms
def difference_symptoms(list_symptom_1, list_symptom_2):
  difference = set(list_symptom_2).difference(list_symptom_1)
  return list(difference)

# Compare result
def compare_result(result_1, result_2):
  if result_1 != result_2:
    return False
  return True
  
class ChatBot:
  def __init__(self, ClientInfo) -> None:
    self.clientInfo = ClientInfo
    self.previous_result = "Can't predict!"
    self.chat = self.Predict()

  def ProcessMessage(self, msg):
    self.msg = msg
    next(self.chat)
    
  def Predict(self):
    # Predicted disease
    output_disease = "Can't predict!"
    previous_result = output_disease
    num_predict = 0
    list_symptom = []
    viet_to_eng(list_symptom, self.msg)
    
    while num_predict < 5:
      # Prediction
      result = model.predict_input_symptoms(list_symptom)
      # Compare result
      if compare_result(previous_result, result):
        output_disease = result
        break
      # Get symptoms of predicted disease
      list_symptom_result = get_symptoms_disease(result)
      # Get symptoms to ask more
      ask_more = difference_symptoms(list_symptom, list_symptom_result)
      if len(ask_more) == 0:
        output_disease = result
        break

      self.sendAskMore(eng_to_vie(ask_more))
      yield

      # List new symptom --- GET FROM CHATBOX
      string_next = self.msg
      list_new_symptom = []
      viet_to_eng(list_new_symptom, string_next)
      
      if len(list_new_symptom) == 0:
        second_result, third_result = model.predict_near_input_symptoms(list_symptom)
        list_symptom_second_result = get_symptoms_disease(second_result)
        ask_more = difference_symptoms(list_symptom, list_symptom_second_result)
       
        self.sendAskMore(eng_to_vie(ask_more))
        yield
        string_next = self.msg
        list_new_symptom = []
        viet_to_eng(list_new_symptom, string_next)
        
        if len(list_new_symptom) == 0:
          list_symptom_third_result = get_symptoms_disease(third_result)
          ask_more = difference_symptoms(list_symptom, list_symptom_third_result)
          
          self.sendAskMore(eng_to_vie(ask_more))
          yield
          string_next = self.msg
          viet_to_eng(list_new_symptom, string_next)
          
      # List symptom after updating
      list_symptom += list_new_symptom
      previous_result = result
      num_predict += 1

    if output_disease == "Can't predict!":
      second_result, third_result = model.predict_near_input_symptoms(list_symptom)
      self.sendResult("Chúng tôi không thể chẩn đoán chính xác")
      self.sendResult(f"Bạn có khả năng mắc một trong ba bệnh sau: {previous_result}, {second_result}, {third_result}")
    else:
      self.sendResult(f"Chúng tôi chẩn đoán bạn bị mắc bệnh: {output_disease}")
    
    self.chat = self.Predict()
    yield

  def sendAskMore(self, askmore):
    msg = "Để thêm chắc chắn về kết quả, bạn có gặp triệu chứng nào sau đây không? " 
    for ask in askmore:
      msg += ask + ", "
    msg = msg[:-2]
    self.clientInfo["socketIO"].emit("message", msg, to=self.clientInfo['room'])

  def sendResult(self, result):
    self.clientInfo["socketIO"].emit("message", result, to=self.clientInfo['room'])



    

  