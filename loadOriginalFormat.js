// Salami Bashir
// Code can still be refactored, clearly indicating the entry point,
// Eliminating global variables entirely

// python's inbuilt time library
// import time

// python's inbuilt json library. JSON in Javascript
// import json

// Data you sent to me
info_list_raw = [[['iPhone XS Max'],
                  ['', 'Storage Size', 'New', 'A1', 'A2', 'B1', 'B2', 'C', 'C/B', 'C/D'],
                  ['Unlocked',
                   '64GB',
                   '$560',
                   '$555',
                   '$550',
                   '$545',
                   '$540',
                   '$535',
                   '$530',
                   '$525'],
                  ['',
                   '256GB',
                   '$580',
                   '$575',
                   '$570',
                   '$565',
                   '$560',
                   '$555',
                   '$550',
                   '$545'],
                  ['',
                   '512GB',
                   '$600',
                   '$595',
                   '$590',
                   '$585',
                   '$580',
                   '$575',
                   '$570',
                   '$565'],
                  ['iPhone XS'],
                  ['', 'Storage Size', 'New', 'A1', 'A2', 'B1', 'B2', 'C', 'C/B', 'C/D'],
                  ['Unlocked',
                   '64GB',
                   '$510',
                   '$505',
                   '$500',
                   '$495',
                   '$490',
                   '$485',
                   '$480',
                   '$475'],
                  ['',
                   '256GB',
                   '$530',
                   '$525',
                   '$520',
                   '$515',
                   '$510',
                   '$505',
                   '$500',
                   '$495'],
                  ['',
                   '512GB',
                   '$550',
                   '$545',
                   '$540',
                   '$535',
                   '$530',
                   '$525',
                   '$520',
                   '$515'],
                  ['iPhone XR'],
                  ['', 'Storage Size', 'New', 'A1', 'A2', 'B1', 'B2', 'C', 'C/B', 'C/D'],
                  ['Unlocked',
                   '64GB',
                   '$460',
                   '$455',
                   '$450',
                   '$445',
                   '$440',
                   '$435',
                   '$430',
                   '$425'],
                  ['',
                   '128GB',
                   '$480',
                   '$475',
                   '$470',
                   '$465',
                   '$460',
                   '$455',
                   '$450',
                   '$445'],
                  ['',
                   '256GB',
                   '$500',
                   '$495',
                   '$490',
                   '$485',
                   '$480',
                   '$475',
                   '$470',
                   '$465'],
                  ['iPhone X'],
                  ['', 'Storage Size', 'New', 'A1', 'A2', 'B1', 'B2', 'C', 'C/B', 'C/D'],
                  ['Unlocked',
                   '64GB',
                   '$430',
                   '$425',
                   '$420',
                   '$415',
                   '$410',
                   '$405',
                   '$400',
                   '$395'],
                  ['',
                   '256GB',
                   '$450',
                   '$445',
                   '$440',
                   '$435',
                   '$430',
                   '$425',
                   '$420',
                   '$415'],
                  ['iPhone 8 PLUS'],
                  ['', 'Storage Size', 'New', 'A1', 'A2', 'B1', 'B2', 'C', 'C/B', 'C/D'],
                  ['Unlocked',
                   '64GB',
                   '$380',
                   '$375',
                   '$370',
                   '$365',
                   '$360',
                   '$355',
                   '$350',
                   '$345'],
                  ['',
                   '256GB',
                   '$400',
                   '$395',
                   '$390',
                   '$385',
                   '$380',
                   '$375',
                   '$370',
                   '$365'],
                  ['iPhone 8'],
                  ['', 'Storage Size', 'New', 'A1', 'A2', 'B1', 'B2', 'C', 'C/B', 'C/D'],
                  ['Unlocked',
                   '64GB',
                   '$330',
                   '$325',
                   '$320',
                   '$315',
                   '$310',
                   '$305',
                   '$300',
                   '$295'],
                  ['',
                   '256GB',
                   '$350',
                   '$345',
                   '$340',
                   '$335',
                   '$330',
                   '$325',
                   '$320',
                   '$315'],
                  ['iPhone 7 Plus'],
                  ['', 'Storage Size', 'New', 'A1', 'A2', 'B1', 'B2', 'C', 'C/B', 'C/D'],
                  ['Unlocked',
                   '32GB',
                   '$260',
                   '$255',
                   '$250',
                   '$245',
                   '$240',
                   '$235',
                   '$230',
                   '$225'],
                  ['',
                   '128GB',
                   '$280',
                   '$275',
                   '$270',
                   '$265',
                   '$260',
                   '$255',
                   '$250',
                   '$245'],
                  ['',
                   '256GB',
                   '$300',
                   '$295',
                   '$290',
                   '$285',
                   '$280',
                   '$275',
                   '$270',
                   '$265'],
                  ['iPhone 7'],
                  ['', 'Storage Size', 'New', 'A1', 'A2', 'B1', 'B2', 'C', 'C/B', 'C/D'],
                  ['Unlocked',
                   '32GB',
                   '$210',
                   '$205',
                   '$200',
                   '$195',
                   '$190',
                   '$185',
                   '$180',
                   '$175'],
                  ['',
                   '128GB',
                   '$230',
                   '$225',
                   '$220',
                   '$215',
                   '$210',
                   '$205',
                   '$200',
                   '$195'],
                  ['',
                   '256GB',
                   '$250',
                   '$245',
                   '$240',
                   '$235',
                   '$230',
                   '$225',
                   '$220',
                   '$215'],
                  ['iPhone 6S Plus'],
                  ['', 'Storage Size', 'New', 'A1', 'A2', 'B1', 'B2', 'C', 'C/B', 'C/D'],
                  ['Unlocked',
                   '16GB',
                   '$170',
                   '$165',
                   '$160',
                   '$155',
                   '$150',
                   '$145',
                   '$140',
                   '$135'],
                  ['',
                   '32GB',
                   '$180',
                   '$175',
                   '$170',
                   '$165',
                   '$160',
                   '$155',
                   '$150',
                   '$145'],
                  ['',
                   '64GB',
                   '$190',
                   '$185',
                   '$180',
                   '$175',
                   '$170',
                   '$165',
                   '$160',
                   '$155'],
                  ['',
                   '128GB',
                   '$200',
                   '$195',
                   '$190',
                   '$185',
                   '$180',
                   '$175',
                   '$170',
                   '$165'],
                  ['iPhone 6S'],
                  ['', 'Storage Size', 'New', 'A1', 'A2', 'B1', 'B2', 'C', 'C/B', 'C/D'],
                  ['Unlocked',
                   '16GB',
                   '$120',
                   '$115',
                   '$110',
                   '$105',
                   '$100',
                   '$95',
                   '$90',
                   '$85'],
                  ['',
                   '32GB',
                   '$130',
                   '$125',
                   '$120',
                   '$115',
                   '$110',
                   '$105',
                   '$100',
                   '$95'],
                  ['',
                   '64GB',
                   '$140',
                   '$135',
                   '$130',
                   '$125',
                   '$120',
                   '$115',
                   '$110',
                   '$105'],
                  ['',
                   '128GB',
                   '$150',
                   '$145',
                   '$140',
                   '$135',
                   '$130',
                   '$125',
                   '$120',
                   '$115'],
                  ['iPhone 6 Plus'],
                  ['', 'Storage Size', 'New', 'A1', 'A2', 'B1', 'B2', 'C', 'C/B', 'C/D'],
                  ['Unlocked',
                   '16GB',
                   '$60',
                   '$55',
                   '$50',
                   '$45',
                   '$40',
                   '$35',
                   '$30',
                   '$25'],
                  ['', '64GB', '$80', '$75', '$70', '$65', '$60', '$55', '$50', '$45'],
                  ['', '128GB', '$100', '$95', '$90', '$85', '$80', '$75', '$70', '$65'],
                  ['iPhone 6'],
                  ['', 'Storage Size', 'New', 'A1', 'A2', 'B1', 'B2', 'C', 'C/B', 'C/D'],
                  ['Unlocked',
                   '16GB',
                   '$60',
                   '$55',
                   '$50',
                   '$45',
                   '$40',
                   '$35',
                   '$30',
                   '$25'],
                  ['', '64GB', '$80', '$75', '$70', '$65', '$60', '$55', '$50', '$45'],
                  ['', '128GB', '$100', '$95', '$90', '$85', '$80', '$75', '$70', '$65'],
                  ['iPhone SE'],
                  ['', 'Storage Size', 'New', 'A1', 'A2', 'B1', 'B2', 'C', 'C/B', 'C/D'],
                  ['Unlocked',
                   '16GB',
                   '$40',
                   '$35',
                   '$30',
                   '$25',
                   '$20',
                   '$15',
                   '$10',
                   '$5'],
                  ['', '64GB', '$60', '$55', '$50', '$45', '$40', '$35', '$30', '$25'],
                  ['', '128GB', '$80', '$75', '$70', '$65', '$60', '$55', '$50', '$45']]]

// global phone list
phones = []
current_list = []

// global variable to use as lists index, count is set to 0 when a new phone_name is detected
list_iter_count = 0

// global variable to store how many phone_names have been iterated over
proper_phone_name_index = 0


async function extract_phone_names(current_list){
    // function to extract phone names
    // The way the data is presented the phone name is the only list that has a single element
    // Check that and ignore others
    if (current_list.length == 1){
        // create a dictionary containing the phone name as the first key
        // and a list as the value
        const phone_dict = {}
        phone_dict.push(current_list[0])
        
        // append dictionary to global list
        phones.append(phone_dict)
    }
}

    // print(phones)


    async function extract_phone_condition(current_list, iter_count){
    // function to extract phone condition from the data
    // according to the data presentation phone condition list is always below
    // the phone name list.

    // Use the current iteration count to filter the lists
    if (iter_count == 1){
        // first two elements in the list are not needed
        // slice the list to only contain elements that are needed
        current_list = current_list.slice(2)

      

        // iterate over the newly sliced list
        for (condition in current_list){
            // Access the current phone dictionary from the list using 'proper_phone_name_index'
            current_phone = phones[proper_phone_name_index]
            // Since you cannot access a dictionary using indexes,
            // Iterate over the values of the dictionary
            // Probably a better way to do this

            for (phone_name_value in current_phone.values()){
                // create a new dictionary that contains the condition as the key
                // and an empty list as the value
                condition_dict = {
                    condition: []
                }
                // append the dictionary to the phone_name list
                // e.g {'iPhone 6': []} ==> {'iPhone 6': [{'New': {}}]
                phone_name_value.append(condition_dict)
            }
        }
    }
}

function extract_phone_size_price(current_list, iter_count){
    // according to the data phone sizes and prices list is after the
    // phone name list and condition list
    // use the iteration count to filter

    if (iter_count >= 2){
        // The phone size is always the second element on the list
        phone_size = current_list[1];

        // the prices start from third element
        current_list = current_list.slice(2);

        // traditional for loops in python do not give indexes
        // Use enumerate to access those. Node should not have a
        // problem when using traditional for loops

        // Iterate over the list to extract the prices
        for( i, price in enumerate(current_list)){
            // Iterate over the current phone dictionary Values
            for (phone_name_values in phones[proper_phone_name_index].values()){
                // Iterate .. I've forgotten what i did here really
                for (vals in phone_name_values[i].values()){
                    vals.append({phone_size: price})
                }
            }
        }
    }
}


//// ENTRY POINT ////

// Iterate over Raw List
for (items in info_list_raw)
    // Raw list is 2 levels deep,
    // Iterate again
    for (item in items)
        // get phone names
        extract_phone_names(item)

        // move past the first list
        // first list is most likely the phone name
        if (list_iter_count > 0)
            // Edge Case, check number of elements in the list,
            // if it's 1, It's most likely the phone name
            if (len(item) == 1)
                // If it's the phone name, reset the iteration count to 0
                list_iter_count = 0
                // update the number of phone names iterated over
                proper_phone_name_index = proper_phone_name_index + 1
                // Skip the execution of the remaining functions
                return

            // get phone condition
            extract_phone_condition(item, list_iter_count)

            // get storage size
            extract_phone_size_price(item, list_iter_count)

        // Increase Iteration Count
        list_iter_count = list_iter_count + 1

// global list to store proper phone data dictionaries
final_phones_list = []

// Iterate over each phone
for (phone in phones)
    // define a dictionary that holds the final dictionary format
    local_dict = {
        'name': '',
        'status': 'Unlocked',
        'storage': '',
        'condition': '',
        'price': ''
    }
    // first level iteration
    // iterate over dictionary keys and values
    for (phone_name, phone_value in phone.items())
        // Set the first key as phone name in the local_object
        local_dict['name'] = phone_name

        // 2nd level iteration
        // Iterate over phone_value list
        for (conditions in phone_value)
            // iterate over dictionary keys and values
            for (condition, condition_values in conditions.items())
                // set condition key as the local dictionary condition
                local_dict['condition'] = condition

                // iterate over condition_values list
                for (storage_and_prices in condition_values)
                    // iterate over storage_and_prices dictionary to get storage as
                    // the key and price as the value
                    for (storage, price in storage_and_prices.items())
                        // set storage key as local dictionary storage
                        local_dict['storage'] = storage
                        // set price value as local dictionary price
                        local_dict['price'] = price

                        // Push the local dictionary to the global list and
                        // redeclare as dict because some weird mutations were happening
                        final_phones_list.append(dict(local_dict))

// Convert data to json
// indent=4 to make more readable
final_data_json = json.dumps({'data': final_phones_list}, indent=4)

// use epoch time to dynamically generate filenames
// f strings (f"{}") are equivalent to `${}` in Javascript
// filename = f"data-{time.time()}.json"

// // Save Json As File
// // "with" handles opening on closing of files
// with open(filename, 'w', encoding='utf-8') as f:
//     // write data to file
//     f.write(final_data_json)

// output result to command line
print(final_data_json)
