package com.example;

import java.util.Arrays;
import java.util.Stack;

public class Lab {

	/*
	  1. Return the nth fibonacci number
	  f(0) = 0
	  f(1) = 1
	  f(10) = 55
	*/
	public static int fibonacci(int n) {
		int result = 0;
		if (n<=0){
			return 0;
		}
		else if(n==1){
			return 1;
		}
		else{
			return fibonacci(n-1) + fibonacci(n-2);
		}
	}

	/*
	  2. Sort array of integers
	  f([2,4,5,1,3,1]) = [1,1,2,3,4,5]
	  Don't use built-in sort() method... that would be lame.
	*/
	public static int[] sort(int[] array) {

		for (i=0; i<array.length; i++) {
			for (j=i+1; j<array.length; j++){
				if (array[j]<array[i]){
					int t = array[i];
					array[i] = array[j];
					array[j]=t;

				}

			}
		}
		return array;
	}

	/*
	  3. Return the factorial of n
	  f(0) = 1
	  f(1) = 1
	  f(3) = 6
	*/
	public static int factorial(int n) {
		if (n==0 || n==1){
			return 1;
		}
		if (n<0){
			IllegalArgumentException e = new IllegalArgumentException();
			throw e;
		}
		else {
			return n * factorial(n-1);
		}
	}

	/*
	  4. Rotate left
	  Given array, rotate left n times and return array
	  f([1,2,3,4,5], 1) = [2,3,4,5,1]
	  f([1,2,3,4,5], 6) = [2,3,4,5,1]
	  f([1,2,3,4,5], 3) = [4,5,1,2,3]
	*/
	public static int[] rotateLeft(int[] array, int n) {

		int shift = n%array.length;
		for (i=0; i<shift; i++) {
			int t = array[0];
			for (j=0; j<array.length-1; j++) {
				array[j] = array[j + 1];
			}
			array[array.length-1] = t;
		}
		return array;
	}

	/*
	  5. Balanced Brackets
	  A bracket is any one of the following: (, ), {, }, [, or ]
	  The following are balanced brackets:
	    ()
	    ()()
	    (())
	    ({[]})
	  The following are NOT balanced brackets:
	  (
	  )
	  (()
	  ([)]
	  Return true if balanced
	  Return false if not balanced
	*/
	public static boolean balancedBrackets(String bracketsString) {
		Stack<Character> st = new Stack();
		// can pop, push, peek, empty to see if it is empty
		boolean result = true;
		int i=0;
		while( result && i<bracketsString.length()){
		    Character s = bracketsString.charAt(i);
		    if (s == '(' || s == '{'  || s == '{'){
		        st.push(s);
            }
            else if (st.empty()) {
		        return false;
            }
            else {
                 Character c = st.pop();
                 result =( (c=='(' && s ==')' )|| (c=='{' && s =='}' )  || (c=='[' && s ==']' ));
                 if (result == false) {
                     return false;
                 }
            }
            i++;
        }
        return (st.empty());
	}



}
