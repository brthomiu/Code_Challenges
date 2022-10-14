//Java class to take a 2d array and flatten the contents into an array

public class FlattenArray {

    //Main method, 
    public static void main(String[] args) {
        int[][] arr = new int[][] { { 1, 2 }, { 3, 4, 5 } };
        int[] answer = flattenArray(arr);
        for (int i = 0; i < answer.length; i++) {
            System.out.println(answer[i]);
        }
    }

//Iterate through the 2d array to count the total number of entries

    private static int find2dArraySize(int[][] input) {
        int size = 0;
        for (int i = 0; i < input.length; i++) {
            for (int j = 0; j < input[i].length; j++) {
                size += 1;
            }
        }
        return size;
    }

//Instantiate a new array the size of the 2d array, iterate through the 2d array and copy the entries into the array and return it

    public static int[] flattenArray(int[][] input) {
        // Write your code here
        int[] flatArray = new int[find2dArraySize(input)];
        int incrementer = 0;

        for (int i = 0; i < input.length; i++) {
            for (int j = 0; j < input[i].length; j++) {
                flatArray[incrementer] = input[i][j];
                incrementer += 1;
            }
        }
        return flatArray;
    }

}

//bonus idea to implement later - refactor this into a generic that can also return a string or an array list instead
