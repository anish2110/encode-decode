# encode-decode

## For the encoding -
I converted the string into base62 which will give me numbers ranging from 0-61 each having a unique value.The resulting encoded string will be of 1 less length than the original. If a comes in the starting of the string it will be treated as the same and attached to the starting of string after decoding as 'a' represents 0 and therefore it will hinder the encoding algorithm.


## For the decoding - 
I converted the encoded string into base26 which will give me numbers ranging from 0-25 eachi having a unique value.If there are 'a' in the starting it will be treated as the same ad attached to the starting of the string to satisfy the decoding algorithm.

I have attached the javascript file and some screenshots of the test cases.

*Also the algorithm fails if the length of the string is greater than 12 (excluding the length of 'a' in the starting) as overflow occurs. 


![1](https://user-images.githubusercontent.com/55437843/114132884-cc45db00-9922-11eb-9030-f85eba4ae546.png)

![2](https://user-images.githubusercontent.com/55437843/114132898-d1a32580-9922-11eb-8962-c2512504d639.png)

![3](https://user-images.githubusercontent.com/55437843/114132904-d49e1600-9922-11eb-95d8-6cc8f60190c1.png)
