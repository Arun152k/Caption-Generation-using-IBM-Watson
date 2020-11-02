//Extracting the classes and the probability score from 'msg'(The Output given by the Watson Visual Recognition Service).
msg.payload=msg.result.images[0].classifiers[0].classes
return msg;
