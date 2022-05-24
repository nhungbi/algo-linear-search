array_to_search_through = []
for number in range(1, 1001):
    array_to_search_through.append(number)

def linear_search(value_to_find, array_to_search_through):
    index = 0
    for elt in array_to_search_through:
        if elt == value_to_find:
            return index
        index +=1

def global_linear_seach (value_to_find, array_to_search_through):
    output = []
    index = 0
    for elt in array_to_search_through:
        if elt == value_to_find:
            output.append(index)
        index +=1
    
    return output

# print(global_linear_seach('a',list('bananas')))