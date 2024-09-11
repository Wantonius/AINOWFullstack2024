package main

import "fmt"

func main() {

	//in GO arrays are fixed length and they are initialized to default values 
	//unless initialized properly

	var myArray [6]int
	
	fmt.Println("MyArray:",myArray)
	fmt.Println("MyArray length:",len(myArray))

	myArray[3] = 50
	fmt.Println("MyArray again",myArray)
	
	myInitalizedArray := [3]int{1,2,3}
	
	fmt.Println("Initialized array",myInitalizedArray)

	fmt.Println("----Slices----")
	
	//This is a slice. Slices are dynamically created and can change in size. 
	
	var mySlice []int //Does not allocate memory.
	
	myAllocatedSlice := make([]int,10) //Slice with 10 dynamically allocated ints of value zero
	
	fmt.Println("MySlice",mySlice)
	fmt.Println("MySlice length",len(mySlice))
	
	fmt.Println("myAllocatedSlice",myAllocatedSlice)
	fmt.Println("myAllocatedSlice length",len(myAllocatedSlice))
	
	//You cannot add to unallocated slize directly by mySlice[0] = 10. This will crash. Instead we use append
	
	mySlice = append(mySlice,0)
	
	//When appending slice or an array we use the three-dot syntax
	
	mySlice = append(mySlice,[]int{10,100}...)
	
	fmt.Println("mySlice",mySlice)
	fmt.Println("mySlice length",len(mySlice))
	
	copiedSlice := make([]int,len(mySlice))
	
	copy(copiedSlice,mySlice)
	
	fmt.Println("Copied Slice:",copiedSlice)
	
	partialSlice := mySlice[1:3]
	
	fmt.Println("Partial Slice",partialSlice)
	
	fmt.Println("----Maps----")
	
	//Maps use key value pairs. Use make to create maps
	
	intStrMap := make(map[int]string)
	strIntMap := make(map[string]int)
	
	intStrMap[1] = "One"
	intStrMap[2] = "Two"
	
	strIntMap["one"] = 1
	strIntMap["two"] = 2
	
	fmt.Println("intStrMap",intStrMap)
	fmt.Println("strIntMap",strIntMap)
	
	//Remove by key using delete
	
	delete(strIntMap,"two")
	fmt.Println("strIntMap",strIntMap)
	
	//Initializing map with initial values
	
	initialMap := map[int]string{1:"one",2:"two"}
	
	//Checking if a map has a key or a value
	if val,ok := initialMap[2]; ok {
		fmt.Printf("Initialized map contains %s\n",val)
	}
	
	if _,ok := initialMap[3];!ok {
		fmt.Println("Initialized map does contain that value or key")
	}
}