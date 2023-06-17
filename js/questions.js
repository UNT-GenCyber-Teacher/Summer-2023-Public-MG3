const questions = [
  // Category: Encryption and Hashing

  {
    prompt: 'Question 1: Which cryptographic technique converts plaintext into a non-readable form to protect sensitive information?',
    options: ['A) Hashing',
      'B) Decryption',
      'C) Encryption',
      'D) Key generation'],
    correctAnswer: 'C) Encryption',
    cashPrize: 100
  },
  {
    prompt: 'Question 2: Which cryptographic process transforms encrypted information into its original format?',
    options: ['A) Encryption',
      'B) Decryption',
      'C) Hashing',
      'D) Key generation'],
    correctAnswer: 'B) Decryption',
    cashPrize: 200
  },
  {
    prompt: 'Question 3: Which cryptographic technique uses two different keys for encryption and decryption?',
    options: ['A) Symmetric encryption',
      'B) Asymmetric encryption',
      'C) Hashing',
      'D) Salting'],
    correctAnswer: 'B) Asymmetric encryption',
    cashPrize: 300
  },
  {
    prompt: 'Question 4: Which cryptographic process converts plaintext into a fixed-length string of characters that represents the original data?',
    options: ['A) Encryption',
      'B) Decryption',
      'C) Key generation',
      'D) Hashing'],
    correctAnswer: 'D) Hashing',
    cashPrize: 400
  },
  {
    prompt: 'Question 5: Which cryptographic technique is commonly used to verify the integrity of data?',
    options: ['A) Symmetric encryption',
      'B) Asymmetric encryption',
      'C) Hashing',
      'D) Salting'],
    correctAnswer: 'C) Hashing',
    cashPrize: 500
  },

  // Category: Symmetric and Asymmetric Encryption

  {
    prompt: 'Question 1: Which type of encryption uses the same key for both encryption and decryption processes?',
    options: ['A) Symmetric encryption',
      'B) Asymmetric encryption',
      'C) Hashing',
      'D) Quantum encryption'],
    correctAnswer: 'A) Symmetric encryption',
    cashPrize: 100
  },
  {
    prompt: 'Question 2: In which encryption technique are the encryption key and decryption key different?',
    options: ['A) Symmetric encryption',
      'B) Asymmetric encryption',
      'C) Hashing',
      'D) Quantum encryption'],
    correctAnswer: 'B) Asymmetric encryption',
    cashPrize: 200
  },
  {
    prompt: 'Question 3: Which encryption technique best fit for security: symmetric encryption or asymmetric encryption?',
    options: ['A) Symmetric encryption',
      'B) Asymmetric encryption',
      'C) Both provide the same level of security',
      'D) It depends on the specific use case'],
    correctAnswer: 'D) It depends on the specific use case',
    cashPrize: 300
  },
  {
    prompt: 'Question 4: Which encryption technique is more computationally expensive: symmetric encryption or asymmetric encryption?',
    options: ['A) Symmetric encryption',
      'B) Asymmetric encryption',
      'C) Both have similar computational costs',
      'D) It depends on the specific algorithm used'],
    correctAnswer: 'B) Asymmetric encryption',
    cashPrize: 400
  },
  {
    prompt: 'Question 5: Which encryption technique is commonly used for secure communication over an insecure channel?',
    options: ['A) Symmetric encryption',
      'B) Asymmetric encryption',
      'C) Hashing',
      'D) Steganography'],
    correctAnswer: 'B) Asymmetric encryption',
    cashPrize: 500
  },

  // Category: Hash Functions

  {
    prompt: 'Question 1: Which of the following properties is NOT typically associated with a cryptographic hash function?',
    options: ['A) Pre-image resistance',
      'B) Collision resistance',
      'C) Key generation',
      'D) Second pre-image resistance'],
    correctAnswer: 'C) Key generation',
    cashPrize: 100
  },
  {
    prompt: 'Question 2: Which of the following is an example of a widely used cryptographic hash function?',
    options: ['A) SHA-256',
      'B) DES',
      'C) AES',
      'D) RSA'],
    correctAnswer: 'A) SHA-256',
    cashPrize: 200
  },
  {
    prompt: 'Question 3: Which property ensures that it is computationally infeasible to determine the input to a hash function given its output?',
    options: ['A) Pre-image resistance',
      'B) Collision resistance',
      'C) Key generation',
      'D) Second pre-image resistance'],
    correctAnswer: 'A) Pre-image resistance',
    cashPrize: 300
  },
  {
    prompt: 'Question 4: Which property ensures that it is computationally infeasible to find two different inputs that produce the same hash output?',
    options: ['A) Pre-image resistance',
      'B) Collision resistance',
      'C) Key generation',
      'D) Second pre-image resistance'],
    correctAnswer: 'B) Collision resistance',
    cashPrize: 400
  },
  {
    prompt: 'Question 5: Which property ensures that given an input and its hash output, it is computationally infeasible to find another input with the same hash?',
    options: ['A) Pre-image resistance',
      'B) Collision resistance',
      'C) Key generation',
      'D) Second pre-image resistance'],
    correctAnswer: 'D) Second pre-image resistance',
    cashPrize: 500
  },
  
  // Category:  HTTPS

  {
    prompt: 'Question 1: What cryptographic protocol is used by HTTPS to encrypt communications?',
    options: ['A) RSA',
      'B) ECC',
      'C) 3DES',
      'D) Transport Layer Security (TLS)'],
    correctAnswer: 'D) Transport Layer Security (TLS)',
    cashPrize: 100
  },
  {
    prompt: 'Question 2: What is the purpose of the private key in HTTPS?',
    options: ['A) It encrypts information sent from the server to the client',
      'B) It decrypts information sent from the client to the server',
      'C) It verifies the server\'s SSL certificate',
      'D) It generates session keys for secure communication'],
    correctAnswer: 'B) It decrypts information sent from the client to the server',
    cashPrize: 200
  },
  {
    prompt: 'Question 3: What is the purpose of the public key in HTTPS?',
    options: ['A) It encrypts information sent from the server to the client',
      'B) It decrypts information sent from the client to the server',
      'C) It verifies the server\'s SSL certificate',
      'D) It generates session keys for secure communication'],
    correctAnswer: 'A) It encrypts information sent from the server to the client',
    cashPrize: 300
  },
  {
    prompt: 'Question 4: During the TLS handshake, what is the role of the "client hello" message?',
    options: ['A) It verifies the server\'s SSL certificate',
      'B) It encrypts information sent from the server to the client',
      'C) It initiates the handshake and provides information about the client\'s supported cipher suites',
      'D) It generates session keys for secure communication'],
    correctAnswer: 'C) It initiates the handshake and provides information about the client\'s supported cipher suites',
    cashPrize: 400
  },
  {
    prompt: 'Question 5: What is the final step in the TLS handshake process?',
    options: ['A) The client verifies the server\'s SSL certificate',
      'B) The server generates session keys for secure communication',
      'C) The client and server exchange "finished" messages encrypted with session keys',
      'D) The client and server agree on a cipher suite to use for secure communication'],
    correctAnswer: 'C) The client and server exchange "finished" messages encrypted with session keys',
    cashPrize: 500
  },

  // Category: Cipher Techniques

  {
    prompt: 'Question 1: Which cipher technique involves shifting the letters of the alphabet by a fixed number of positions?',
    options: ['A) Caesar cipher',
      'B) Vigenère cipher',
      'C) RSA encryption',
      'D) Diffie-Hellman key exchange'],
    correctAnswer: 'A) Caesar cipher',
    cashPrize: 100
  },
  {
    prompt: 'Question 2: Which cipher technique uses a series of interwoven Caesar ciphers based on a keyword?',
    options: ['A) Caesar cipher',
      'B) Vigenère cipher',
      'C) RSA encryption',
      'D) Diffie-Hellman key exchange'],
    correctAnswer: 'B) Vigenère cipher',
    cashPrize: 200
  },
  {
    prompt: 'Question 3: Which cipher technique uses a mathematical algorithm that relies on the difficulty of factoring large composite numbers?',
    options: ['A) Caesar cipher',
      'B) Vigenère cipher',
      'C) RSA encryption',
      'D) Diffie-Hellman key exchange'],
    correctAnswer: 'C) RSA encryption',
    cashPrize: 300
  },
  {
    prompt: 'Question 4: Which cipher technique is used for secure key exchange between two parties over an insecure channel?',
    options: ['A) Caesar cipher',
      'B) Vigenère cipher',
      'C) RSA encryption',
      'D) Diffie-Hellman key exchange'],
    correctAnswer: 'D) Diffie-Hellman key exchange',
    cashPrize: 400
  },
  {
    prompt: 'Question 5: Which cipher technique involves substituting one letter or character with another according to a predefined rule?',
    options: ['A) Caesar cipher',
      'B) Vigenère cipher',
      'C) RSA encryption',
      'D) Diffie-Hellman key exchange'],
    correctAnswer: 'A) Caesar cipher',
    cashPrize: 500
  },

  // Category: Cryptographic Attacks

  {
    prompt: 'Question 1: Which cryptographic attack attempts to discover a password or key by trying all possible combinations?',
    options: ['A) Brute-force attack',
      'B) Differential cryptanalysis',
      'C) Birthday attack',
      'D) Side-channel attack'],
    correctAnswer: 'A) Brute-force attack',
    cashPrize: 100
  },
  {
    prompt: 'Question 2: Which cryptographic attack exploits the weaknesses in the implementation of a cryptographic algorithm rather than attacking the algorithm itself?',
    options: ['A) Brute-force attack',
      'B) Differential cryptanalysis',
      'C) Birthday attack',
      'D) Side-channel attack'],
    correctAnswer: 'D) Side-channel attack',
    cashPrize: 200
  },
  {
    prompt: 'Question 3: Which cryptographic attack attempts to find two different inputs that produce the same hash output?',
    options: ['A) Brute-force attack',
      'B) Differential cryptanalysis',
      'C) Collision attack',
      'D) Side-channel attack'],
    correctAnswer: 'C) Collision attack',
    cashPrize: 300
  },
  {
    prompt: 'Question 4: Which cryptographic attack analyzes the statistical properties of a cryptographic algorithm to deduce the key used in the encryption process?',
    options: ['A) Brute-force attack',
      'B) Differential cryptanalysis',
      'C) Birthday attack',
      'D) Side-channel attack'],
    correctAnswer: 'B) Differential cryptanalysis',
    cashPrize: 400
  },
  {
    prompt: 'Question 5: Which cryptographic attack aims to guess or infer the secret key by observing the physical implementation of a cryptographic system?',
    options: ['A) Brute-force attack',
      'B) Differential cryptanalysis',
      'C) Birthday attack',
      'D) Side-channel attack'],
    correctAnswer: 'D) Side-channel attack',
    cashPrize: 500
  }
];

export default questions;