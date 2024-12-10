import sys
import joblib
import json
import numpy as np

# Load the saved model and label encoder
model = joblib.load("./model/crop_recommendation_model_rf.pkl")
label_encoder = joblib.load("./model/label_encoder_rf.pkl")

# Get input parameters from the command line
N, P, K, temperature, humidity, ph, rainfall = map(float, sys.argv[1:])

# Prepare the input for prediction
input_data = np.array([[N, P, K, temperature, humidity, ph, rainfall]])

# Predict crop label and confidence score
predicted_label = model.predict(input_data)
confidence_scores = model.predict_proba(input_data)

# Get the crop name and confidence score
predicted_crop = label_encoder.inverse_transform(predicted_label)[0]
predicted_confidence = confidence_scores[0][predicted_label[0]]

# Prepare the result as JSON
result = {
    "crop": predicted_crop,
    "confidence": round(predicted_confidence, 2)
}

# Print the result as a JSON string
print(json.dumps(result))
