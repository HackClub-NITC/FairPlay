import React, { useState } from "react";

function CPlusPlusCodeComponent() {
	const [copied, setCopied] = useState(false);
	const cplusCode = `// C++ program to implement Playfair Cipher

  #include <bits/stdc++.h>
  using namespace std;
  #define SIZE 30
  
  // Function to convert the string to lowercase
  void toLowerCase(char plain[], int ps)
  {
      int i;
      for (i = 0; i < ps; i++) {
          if (plain[i] > 64 && plain[i] < 91)
              plain[i] += 32;
      }
  }
  
  // Function to remove all spaces in a string
  int removeSpaces(char* plain, int ps)
  {
      int i, count = 0;
      for (i = 0; i < ps; i++)
          if (plain[i] != ' ')
              plain[count++] = plain[i];
      plain[count] = '\0';
      return count;
  }
  
  // Function to generate the 5x5 key square
  void generateKeyTable(char key[], int ks, char keyT[5][5])
  {
      int i, j, k, flag = 0;
  
      // a 26 character hashmap
      // to store count of the alphabet
      int dicty[26] = { 0 };
      for (i = 0; i < ks; i++) {
          if (key[i] != 'j')
              dicty[key[i] - 97] = 2;
      }
  
      dicty['j' - 97] = 1;
  
      i = 0;
      j = 0;
  
      for (k = 0; k < ks; k++) {
          if (dicty[key[k] - 97] == 2) {
              dicty[key[k] - 97] -= 1;
              keyT[i][j] = key[k];
              j++;
              if (j == 5) {
                  i++;
                  j = 0;
              }
          }
      }
  
      for (k = 0; k < 26; k++) {
          if (dicty[k] == 0) {
              keyT[i][j] = (char)(k + 97);
              j++;
              if (j == 5) {
                  i++;
                  j = 0;
              }
          }
      }
  }
  
  // Function to search for the characters of a digraph
  // in the key square and return their position
  void search(char keyT[5][5], char a, char b, int arr[])
  {
      int i, j;
  
      if (a == 'j')
          a = 'i';
      else if (b == 'j')
          b = 'i';
  
      for (i = 0; i < 5; i++) {
  
          for (j = 0; j < 5; j++) {
  
              if (keyT[i][j] == a) {
                  arr[0] = i;
                  arr[1] = j;
              }
              else if (keyT[i][j] == b) {
                  arr[2] = i;
                  arr[3] = j;
              }
          }
      }
  }
  
  // Function to find the modulus with 5
  int mod5(int a) { return (a % 5); }
  
  // Function to make the plain text length to be even
  int prepare(char str[], int ptrs)
  {
      if (ptrs % 2 != 0) {
          str[ptrs++] = 'z';
          str[ptrs] = '\0';
      }
      return ptrs;
  }
  
  // Function for performing the encryption
  void encrypt(char str[], char keyT[5][5], int ps)
  {
      int i, a[4];
  
      for (i = 0; i < ps; i += 2) {
  
          search(keyT, str[i], str[i + 1], a);
  
          if (a[0] == a[2]) {
              str[i] = keyT[a[0]][mod5(a[1] + 1)];
              str[i + 1] = keyT[a[0]][mod5(a[3] + 1)];
          }
          else if (a[1] == a[3]) {
              str[i] = keyT[mod5(a[0] + 1)][a[1]];
              str[i + 1] = keyT[mod5(a[2] + 1)][a[1]];
          }
          else {
              str[i] = keyT[a[0]][a[3]];
              str[i + 1] = keyT[a[2]][a[1]];
          }
      }
  }
  
  // Function to encrypt using Playfair Cipher
  void encryptByPlayfairCipher(char str[], char key[])
  {
      char ps, ks, keyT[5][5];
  
      // Key
      ks = strlen(key);
      ks = removeSpaces(key, ks);
      toLowerCase(key, ks);
  
      // Plaintext
      ps = strlen(str);
      toLowerCase(str, ps);
      ps = removeSpaces(str, ps);
  
      ps = prepare(str, ps);
  
      generateKeyTable(key, ks, keyT);
  
      encrypt(str, keyT, ps);
  }
  
  // Driver code
  int main()
  {
      char str[SIZE], key[SIZE];
  
      // Key to be encrypted
      strcpy(key, "Monarchy");
      cout << "Key text: " << key << "\n";
  
      // Plaintext to be encrypted
      strcpy(str, "instruments");
      cout << "Plain text: " << str << "\n";
  
      // encrypt using Playfair Cipher
      encryptByPlayfairCipher(str, key);
  
      cout << "Cipher text: " << str << "\n";
  
      return 0;
  }`;
	const handleCopyClick = () => {
		navigator.clipboard.writeText(cplusCode);
		setCopied(true);
		setTimeout(() => {
			setCopied(false);
		}, 1500);
	};

	return (
		<div>
			<label style={{ textAlign: "left" }}>C++ Code:</label>
			<pre style={{ textAlign: "left" }}>
				<code>{cplusCode}</code>
			</pre>
			<button onClick={handleCopyClick}>
				{copied ? "Copied!" : "Copy to Clipboard"}
			</button>
		</div>
	);
}

function CCodeComponent() {
	const [copied, setCopied] = useState(false);

	const cCode = `// C program to implement Playfair Cipher

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define SIZE 30

// Function to convert the string to lowercase
void toLowerCase(char plain[], int ps)
{
	int i;
	for (i = 0; i < ps; i++) {
		if (plain[i] > 64 && plain[i] < 91)
			plain[i] += 32;
	}
}

// Function to remove all spaces in a string
int removeSpaces(char* plain, int ps)
{
	int i, count = 0;
	for (i = 0; i < ps; i++)
		if (plain[i] != ' ')
			plain[count++] = plain[i];
	plain[count] = '\0';
	return count;
}

// Function to generate the 5x5 key square
void generateKeyTable(char key[], int ks, char keyT[5][5])
{
	int i, j, k, flag = 0, *dicty;

	// a 26 character hashmap
	// to store count of the alphabet
	dicty = (int*)calloc(26, sizeof(int));
	for (i = 0; i < ks; i++) {
		if (key[i] != 'j')
			dicty[key[i] - 97] = 2;
	}

	dicty['j' - 97] = 1;

	i = 0;
	j = 0;

	for (k = 0; k < ks; k++) {
		if (dicty[key[k] - 97] == 2) {
			dicty[key[k] - 97] -= 1;
			keyT[i][j] = key[k];
			j++;
			if (j == 5) {
				i++;
				j = 0;
			}
		}
	}

	for (k = 0; k < 26; k++) {
		if (dicty[k] == 0) {
			keyT[i][j] = (char)(k + 97);
			j++;
			if (j == 5) {
				i++;
				j = 0;
			}
		}
	}
}

// Function to search for the characters of a digraph
// in the key square and return their position
void search(char keyT[5][5], char a, char b, int arr[])
{
	int i, j;

	if (a == 'j')
		a = 'i';
	else if (b == 'j')
		b = 'i';

	for (i = 0; i < 5; i++) {

		for (j = 0; j < 5; j++) {

			if (keyT[i][j] == a) {
				arr[0] = i;
				arr[1] = j;
			}
			else if (keyT[i][j] == b) {
				arr[2] = i;
				arr[3] = j;
			}
		}
	}
}

// Function to find the modulus with 5
int mod5(int a) { return (a % 5); }

// Function to make the plain text length to be even
int prepare(char str[], int ptrs)
{
	if (ptrs % 2 != 0) {
		str[ptrs++] = 'z';
		str[ptrs] = '\0';
	}
	return ptrs;
}

// Function for performing the encryption
void encrypt(char str[], char keyT[5][5], int ps)
{
	int i, a[4];

	for (i = 0; i < ps; i += 2) {

		search(keyT, str[i], str[i + 1], a);

		if (a[0] == a[2]) {
			str[i] = keyT[a[0]][mod5(a[1] + 1)];
			str[i + 1] = keyT[a[0]][mod5(a[3] + 1)];
		}
		else if (a[1] == a[3]) {
			str[i] = keyT[mod5(a[0] + 1)][a[1]];
			str[i + 1] = keyT[mod5(a[2] + 1)][a[1]];
		}
		else {
			str[i] = keyT[a[0]][a[3]];
			str[i + 1] = keyT[a[2]][a[1]];
		}
	}
}

// Function to encrypt using Playfair Cipher
void encryptByPlayfairCipher(char str[], char key[])
{
	char ps, ks, keyT[5][5];

	// Key
	ks = strlen(key);
	ks = removeSpaces(key, ks);
	toLowerCase(key, ks);

	// Plaintext
	ps = strlen(str);
	toLowerCase(str, ps);
	ps = removeSpaces(str, ps);

	ps = prepare(str, ps);

	generateKeyTable(key, ks, keyT);

	encrypt(str, keyT, ps);
}

// Driver code
int main()
{
	char str[SIZE], key[SIZE];

	// Key to be encrypted
	strcpy(key, "Monarchy");
	printf("Key text: %s\n", key);

	// Plaintext to be encrypted
	strcpy(str, "instruments");
	printf("Plain text: %s\n", str);

	// encrypt using Playfair Cipher
	encryptByPlayfairCipher(str, key);

	printf("Cipher text: %s\n", str);

	return 0;
}`;
	const handleCopyClick = () => {
		navigator.clipboard.writeText(cCode);
		setCopied(true);
		setTimeout(() => {
			setCopied(false);
		}, 1500);
	};

	return (
		<div>
			<label style={{ textAlign: "left" }}>C Code:</label>
			<pre style={{ textAlign: "left" }}>
				<code>{cCode}</code>
			</pre>
			<button onClick={handleCopyClick}>
				{copied ? "Copied!" : "Copy to Clipboard"}
			</button>
		</div>
	);
}

function JavaCodeComponent() {
	const [copied, setCopied] = useState(false);
	const JavaCode = `// Java program to implement Playfair Cipher 
import java.util.*;

public class Solution
{
static int SIZE = 30;

// Function to convert the string to lowercase
static void toLowerCase(char plain[], int ps)
{
	int i;
	for (i = 0; i < ps; i++) {
	if (plain[i] > 64 && plain[i] < 91)
		plain[i] += 32;
	}
}

// Function to remove all spaces in a string
static int removeSpaces(char[] plain, int ps)
{
	int i, count = 0;
	for (i = 0; i < ps; i++)
	if (plain[i] != '\u0000')
		plain[count++] = plain[i];

	return count;
}

// Function to generate the 5x5 key square
static void generateKeyTable(char key[], int ks, char keyT[][])
{
	int i, j, k, flag = 0;

	// a 26 character hashmap
	// to store count of the alphabet
	int dicty[] = new int[26];
	for (i = 0; i < ks; i++) {
	if (key[i] != 'j')
		dicty[key[i] - 97] = 2;
	}

	dicty['j' - 97] = 1;

	i = 0;
	j = 0;

	for (k = 0; k < ks; k++) {
	if (dicty[key[k] - 97] == 2) {
		dicty[key[k] - 97] -= 1;
		keyT[i][j] = key[k];
		j++;
		if (j == 5) {
		i++;
		j = 0;
		}
	}
	}

	for (k = 0; k < 26; k++) {
	if (dicty[k] == 0) {
		keyT[i][j] = (char)(k + 97);
		j++;
		if (j == 5) {
		i++;
		j = 0;
		}
	}
	}
}

// Function to search for the characters of a digraph
// in the key square and return their position
static void search(char keyT[][], char a, char b, int arr[])
{
	int i, j;

	if (a == 'j')
	a = 'i';
	else if (b == 'j')
	b = 'i';

	for (i = 0; i < 5; i++) {

	for (j = 0; j < 5; j++) {

		if (keyT[i][j] == a) {
		arr[0] = i;
		arr[1] = j;
		}
		else if (keyT[i][j] == b) {
		arr[2] = i;
		arr[3] = j;
		}
	}
	}
}

// Function to find the modulus with 5
static int mod5(int a) { return (a % 5); }

// Function to make the plain text length to be even
static int prepare(char str[], int ptrs)
{
	if (ptrs % 2 != 0) {
	str[ptrs++] = 'z';
	str[ptrs] = '\0';
	}
	return ptrs;
}

// Function for performing the encryption
static void encrypt(char str[], char keyT[][], int ps)
{
	int i;
	int[] a =new int[4];

	for (i = 0; i < ps; i += 2) {

	search(keyT, str[i], str[i + 1], a);

	if (a[0] == a[2]) {
		str[i] = keyT[a[0]][mod5(a[1] + 1)];
		str[i + 1] = keyT[a[0]][mod5(a[3] + 1)];
	}
	else if (a[1] == a[3]) {
		str[i] = keyT[mod5(a[0] + 1)][a[1]];
		str[i + 1] = keyT[mod5(a[2] + 1)][a[1]];
	}
	else {
		str[i] = keyT[a[0]][a[3]];
		str[i + 1] = keyT[a[2]][a[1]];
	}
	}
}

// Function to encrypt using Playfair Cipher
static void encryptByPlayfairCipher(char str[], char key[])
{
	int ps; 
	int ks;
	char[][] keyT = new char[5][5];

	// Key
	ks = key.length;
	ks = removeSpaces(key, ks);
	toLowerCase(key, ks);

	// Plaintext
	ps = str.length;
	toLowerCase(str, ps);
	ps = removeSpaces(str, ps);

	ps = prepare(str, ps);

	generateKeyTable(key, ks, keyT);

	encrypt(str, keyT, ps);
}

static void strcpy(char[] arr, String s) {
	for(int i = 0;i < s.length();i++){
	arr[i] = s.charAt(i);
	}
}

// Driver code
public static void main(String[] args) {
	char str[] = new char[SIZE];
	char key[] = new char[SIZE];

	// Key to be encrypted

	strcpy(key, "Monarchy");
	System.out.println("Key text: " + String.valueOf(key));

	// Plaintext to be encrypted
	strcpy(str, "instruments");
	System.out.println("Plain text: " + String.valueOf(str));

	// encrypt using Playfair Cipher
	encryptByPlayfairCipher(str, key);

	System.out.println("Cipher text: " + String.valueOf(str));
}

}

// This code is contributed by karandeep1234
`;
	const handleCopyClick = () => {
		navigator.clipboard.writeText(JavaCode);
		setCopied(true);
		setTimeout(() => {
			setCopied(false);
		}, 1500);
	};

	return (
		<div>
			<label style={{ textAlign: "left" }}>Java Code:</label>
			<pre style={{ textAlign: "left" }}>
				<code>{JavaCode}</code>
			</pre>
			<button onClick={handleCopyClick}>
				{copied ? "Copied!" : "Copy to Clipboard"}
			</button>
		</div>
	);
}

function PythonCodeComponent() {
	const [copied, setCopied] = useState(false);
	const PythonCode = `# Python program to implement Playfair Cipher

# Function to convert the string to lowercase


def toLowerCase(text):
	return text.lower()

# Function to remove all spaces in a string


def removeSpaces(text):
	newText = ""
	for i in text:
		if i == " ":
			continue
		else:
			newText = newText + i
	return newText

# Function to group 2 elements of a string
# as a list element


def Diagraph(text):
	Diagraph = []
	group = 0
	for i in range(2, len(text), 2):
		Diagraph.append(text[group:i])

		group = i
	Diagraph.append(text[group:])
	return Diagraph

# Function to fill a letter in a string element
# If 2 letters in the same string matches


def FillerLetter(text):
	k = len(text)
	if k % 2 == 0:
		for i in range(0, k, 2):
			if text[i] == text[i+1]:
				new_word = text[0:i+1] + str('x') + text[i+1:]
				new_word = FillerLetter(new_word)
				break
			else:
				new_word = text
	else:
		for i in range(0, k-1, 2):
			if text[i] == text[i+1]:
				new_word = text[0:i+1] + str('x') + text[i+1:]
				new_word = FillerLetter(new_word)
				break
			else:
				new_word = text
	return new_word


list1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'k', 'l', 'm',
		'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

# Function to generate the 5x5 key square matrix


def generateKeyTable(word, list1):
	key_letters = []
	for i in word:
		if i not in key_letters:
			key_letters.append(i)

	compElements = []
	for i in key_letters:
		if i not in compElements:
			compElements.append(i)
	for i in list1:
		if i not in compElements:
			compElements.append(i)

	matrix = []
	while compElements != []:
		matrix.append(compElements[:5])
		compElements = compElements[5:]

	return matrix


def search(mat, element):
	for i in range(5):
		for j in range(5):
			if(mat[i][j] == element):
				return i, j


def encrypt_RowRule(matr, e1r, e1c, e2r, e2c):
	char1 = ''
	if e1c == 4:
		char1 = matr[e1r][0]
	else:
		char1 = matr[e1r][e1c+1]

	char2 = ''
	if e2c == 4:
		char2 = matr[e2r][0]
	else:
		char2 = matr[e2r][e2c+1]

	return char1, char2


def encrypt_ColumnRule(matr, e1r, e1c, e2r, e2c):
	char1 = ''
	if e1r == 4:
		char1 = matr[0][e1c]
	else:
		char1 = matr[e1r+1][e1c]

	char2 = ''
	if e2r == 4:
		char2 = matr[0][e2c]
	else:
		char2 = matr[e2r+1][e2c]

	return char1, char2


def encrypt_RectangleRule(matr, e1r, e1c, e2r, e2c):
	char1 = ''
	char1 = matr[e1r][e2c]

	char2 = ''
	char2 = matr[e2r][e1c]

	return char1, char2


def encryptByPlayfairCipher(Matrix, plainList):
	CipherText = []
	for i in range(0, len(plainList)):
		c1 = 0
		c2 = 0
		ele1_x, ele1_y = search(Matrix, plainList[i][0])
		ele2_x, ele2_y = search(Matrix, plainList[i][1])

		if ele1_x == ele2_x:
			c1, c2 = encrypt_RowRule(Matrix, ele1_x, ele1_y, ele2_x, ele2_y)
			# Get 2 letter cipherText
		elif ele1_y == ele2_y:
			c1, c2 = encrypt_ColumnRule(Matrix, ele1_x, ele1_y, ele2_x, ele2_y)
		else:
			c1, c2 = encrypt_RectangleRule(
				Matrix, ele1_x, ele1_y, ele2_x, ele2_y)

		cipher = c1 + c2
		CipherText.append(cipher)
	return CipherText


text_Plain = 'instruments'
text_Plain = removeSpaces(toLowerCase(text_Plain))
PlainTextList = Diagraph(FillerLetter(text_Plain))
if len(PlainTextList[-1]) != 2:
	PlainTextList[-1] = PlainTextList[-1]+'z'

key = "Monarchy"
print("Key text:", key)
key = toLowerCase(key)
Matrix = generateKeyTable(key, list1)

print("Plain Text:", text_Plain)
CipherList = encryptByPlayfairCipher(Matrix, PlainTextList)

CipherText = ""
for i in CipherList:
	CipherText += i
print("CipherText:", CipherText)

# This code is Contributed by Boda_Venkata_Nikith
`;

	const handleCopyClick = () => {
		navigator.clipboard.writeText(PythonCode);
		setCopied(true);
		setTimeout(() => {
			setCopied(false);
		}, 1500);
	};

	return (
		<div>
			<label style={{ textAlign: "left" }}>Python Code:</label>
			<pre style={{ textAlign: "left" }}>
				<code>{PythonCode}</code>
			</pre>
			<button onClick={handleCopyClick}>
				{copied ? "Copied!" : "Copy to Clipboard"}
			</button>
		</div>
	);
}

function JavascriptCodeComponent() {
	const [copied, setCopied] = useState(false);
	const JavascriptCode = `// JavaScript program to implement Playfair Cipher

// Function to generate the 5x5 key square
function generateKeyTable(key, ks, keyT) {
    let i, j, k, flag = 0;

    // a 26 character hashmap
    // to store count of the alphabet
    let dicty = new Array(26).fill(0);
    for (i = 0; i < ks; i++) {
        let r = key[i].charCodeAt(0) - 97;

        if (key[i] != 'j') {
            dicty[r] = 2;
        }

    }

    dicty['j'.charCodeAt(0) - 97] = 1;
    i = 0;
    j = 0;

    for (k = 0; k < ks; k++) {
        let r = key[k].charCodeAt(0) - 97;
        if (dicty[r] == 2) {
            dicty[r] -= 1;
            keyT[i][j] = key[k];
            j++;
            if (j == 5) {
                i++;
                j = 0;
            }
        }
    }

    for (k = 0; k < 26; k++) {
        if (dicty[k] == 0) {
            keyT[i][j] = String.fromCharCode(k + 97);
            j++;
            if (j == 5) {
                i++;
                j = 0;
            }
        }
    }
    return keyT;
}

// Function to search for the characters of a digraph
// in the key square and return their position
function search(keyT, a, b, arr) {
    let i, j;

    if (a == 'j')
        a = 'i';
    else if (b == 'j')
        b = 'i';

    for (i = 0; i < 5; i++) {

        for (j = 0; j < 5; j++) {

            if (keyT[i][j] == a) {
                arr[0] = i;
                arr[1] = j;
            }
            else if (keyT[i][j] == b) {
                arr[2] = i;
                arr[3] = j;
            }
        }
    }
    return arr;
}

// Function to find the modulus with 5
function mod5(a) {
    return (a % 5);
}

// Function to make the plain text length to be even
function prepare(str, ptrs) {
    if (ptrs % 2 != 0) {
        str += 'z';
    }

    return [str, ptrs];
}

// Function for performing the encryption
function encrypt(str, keyT, ps) {
    let i;
    let a = new Array(4).fill(0);
    let newstr = new Array(ps);

    for (i = 0; i < ps; i += 2) {
        let brr = search(keyT, str[i], str[i + 1], a);
        let k1 = brr[0];
        let k2 = brr[1];
        let k3 = brr[2];
        let k4 = brr[3];
        if (k1 == k3) {
            newstr[i] = keyT[k1][(k2 + 1) % 5];
            newstr[i + 1] = keyT[k1][(k4 + 1) % 5];
        }
        else if (k2 == k4) {
            newstr[i] = keyT[(k1 + 1) % 5][k2];
            newstr[i + 1] = keyT[(k3 + 1) % 5][k2];
        }
        else {
            newstr[i] = keyT[k1][k4];
            newstr[i + 1] = keyT[k3][k2];
        }
    }
    let res = "";

    for (let i = 0; i < newstr.length; i++) { res += newstr[i]; }
    return res;
}

// Function to encrypt using Playfair Cipher
function encryptByPlayfairCipher(str, key) {
    let ps, ks;
    let keyT = new Array(5);

    for (let i = 0; i < 5; i++) {
        keyT[i] = new Array(5);
    }
    str = str.trim();
    key = key.trim();
    str = str.toLowerCase();

    key = key.toLowerCase();
    ps = str.length;
    ks = key.length;
    [str, ps] = prepare(str, ps);

    let kt = generateKeyTable(key, ks, keyT);
    return encrypt(str, kt, ps);
}

// Driver code
let key = " Monarchy";
let str = " instruments";

// Key to be encrypted

console.log("Key text: " + key + "<br>");

console.log("Plain text: " + str + "<br>");
// encrypt using Playfair Cipher

console.log("Cipher text: " + encryptByPlayfairCipher(str, key));

// This code is contributed by poojaagarwal2
`;
	const handleCopyClick = () => {
		navigator.clipboard.writeText(JavascriptCode);
		setCopied(true);
		setTimeout(() => {
			setCopied(false);
		}, 1500);
	};

	return (
		<div>
			<label style={{ textAlign: "left" }}>Javascript Code:</label>
			<pre style={{ textAlign: "left" }}>
				<code>{JavascriptCode}</code>
			</pre>
			<button onClick={handleCopyClick}>
				{copied ? "Copied!" : "Copy to Clipboard"}
			</button>
		</div>
	);
}

function PlayfairCipher() {
	const [section, setSection] = useState("cplus"); // Default section is 'cplus'

	const handleSectionChange = (newSection) => {
		setSection(newSection);
	};

	return (
		<>
			<header>
				<h1>About PlayFair Cypher</h1>
			</header>
			<main>
				<p>
					The Playfair cipher is a symmetric encryption technique that uses a
					5x5 grid of letters to encrypt pairs of letters in plaintext.
				</p>
				<ol>
					<li>
						<strong>Key Setup</strong>: Choose a keyword (e.g., "MONARCHY") and
						construct a 5x5 grid (ignoring duplicate letters in the keyword and
						excluding 'J'). Fill the grid with the remaining letters of the
						alphabet, omitting 'J' (e.g., using "I" instead of "J").
					</li>
					<li>
						<strong>Encryption Rules</strong>:
						<ul>
							<li>Replace any 'J' with 'I'.</li>
							<li>
								Split the plaintext into pairs of letters (e.g., "HELLO" becomes
								"HE LX LO").
							</li>
							<li>
								If both letters in a pair are the same, add an 'X' between them
								(e.g., "HELLO" becomes "HE LX LO").
							</li>
							<li>
								If the pairs have an odd number of letters, add an 'X' at the
								end to make it even.
							</li>
							<li>
								For each pair of letters:
								<ul>
									<li>
										If they are in the same row, replace them with the letters
										to their immediate right (wrapping around to the left if at
										the end of a row).
									</li>
									<li>
										If they are in the same column, replace them with the
										letters immediately below (wrapping around to the top if at
										the bottom of a column).
									</li>
									<li>
										If they form a rectangle, replace them with the letters on
										the same row but at the other pair of corners of the
										rectangle.
									</li>
								</ul>
							</li>
						</ul>
					</li>
					<li>
						<strong>Decryption</strong>: To decrypt a message, reverse the
						process by finding the corresponding letters in the grid based on
						the rules above.
					</li>
				</ol>
				<p>
					The Playfair cipher was used historically for secure communication,
					but it is no longer considered secure against modern cryptographic
					attacks.
				</p>
				<div style={{ marginBottom: "3rem" }}>
					<nav className="container-btn">
						<button onClick={() => handleSectionChange("cplus")}>C++</button>
						<button onClick={() => handleSectionChange("c")}>C</button>
						<button onClick={() => handleSectionChange("java")}>Java</button>
						<button onClick={() => handleSectionChange("python")}>
							Python3
						</button>
						<button onClick={() => handleSectionChange("js")}>
							JavaScript
						</button>
					</nav>
				</div>
				{section === "cplus" && (
					<section id="encryptSection" className="">
						<div className="result">
							<CPlusPlusCodeComponent />
						</div>
					</section>
				)}
				{section === "c" && (
					<section id="encryptSection" className="">
						<div className="result">
							<CCodeComponent />
						</div>
					</section>
				)}
				{section === "java" && (
					<section id="encryptSection" className="">
						<div className="result">
							<JavaCodeComponent />
						</div>
					</section>
				)}
				{section === "python" && (
					<section id="encryptSection" className="">
						<div className="result">
							<PythonCodeComponent />
						</div>
					</section>
				)}
				{section === "js" && (
					<section id="encryptSection" className="">
						<div className="result">
							<JavascriptCodeComponent />
						</div>
					</section>
				)}
			</main>
		</>
	);
}

export default AboutPage;
