## array
---
Mảng (Array) được sử dụng để lưu trữ nhiều giá trị trong một biến duy nhất, thay vì khai báo các biến riêng biệt cho từng giá trị.
{: .fs-6 }  



**Mảng tĩnh** (Static Array)  

  
Mảng tĩnh có kích thước cố định và phải được biết trước, được khai báo và khởi tạo trong thời gian biên dịch (compile-time). Bộ nhớ cho mảng tĩnh được cấp phát trên stack.
{: .note }  

  
Các cách phổ biến khai báo và khởi tạo một mảng tĩnh:  
**1. Khai báo mảng tĩnh không khởi tạo:**  
```cpp
int arr1[10]; // Mảng số nguyên với 10 phần tử. Các phần tử có giá trị khởi tạo ngẫu nhiên.
```
**2. Khai báo và khởi tạo mảng tĩnh với các giá trị cụ thể:**  
```cpp
int arr2[5] = {1, 2, 3, 4, 5}; // Mảng số nguyên với 5 phần tử được khởi tạo giá trị cụ thể.
```
**3. Khai báo và khởi tạo mảng tĩnh với số lượng phần tử ít hơn số phần tử được khai báo:**  
```cpp
int arr3[10] = {1, 2, 3}; // Các phần tử còn lại sẽ được khởi tạo giá trị 0.
```
**4. Khởi tạo tất cả các phần tử trong mảng tĩnh bằng 0:**  
```cpp
int arr4[10] = {0}; // Tất cả các phần tử của mảng sẽ được khởi tạo giá trị 0.
```
**5. Sử dụng vòng lặp để khởi tạo mảng tĩnh:**  
```cpp
int arr5[10];
for (int i = 0; i < 10; i++) {
    arr5[i] = i * i; // Khởi tạo mảng với các giá trị là bình phương của chỉ số.
}
```
**6. Khai báo mảng ký tự (chuỗi):**
```cpp
char str1[] = "Hello"; // Chuỗi ký tự kết thúc với ký tự null '\0'.
```
**7. Khai báo và khởi tạo mảng với kích thước tự động xác định bởi số lượng phần tử được cung cấp:**  
```cpp
int arr6[] = {1, 2, 3, 4, 5}; // Mảng với 5 phần tử, kích thước tự động xác định.
```
**8. Khai báo mảng hai chiều (ma trận):**  
```cpp
int matrix1[3][4]; // Ma trận 3x4, các phần tử có giá trị khởi tạo ngẫu nhiên.
```
**9. Khai báo và khởi tạo mảng hai chiều (ma trận) với các giá trị cụ thể:**  
```cpp
int matrix2[3][4] = {
    {1, 2, 3, 4},
    {5, 6, 7, 8},
    {9, 10, 11, 12}
};
```
**10. Khai báo mảng ba chiều:**  
```cpp
int tensor[2][3][4]; // Mảng ba chiều 2x3x4.
```

  
## Những điểm cần lưu ý {#nhung-diem-can-luu-y-static-array}
{: .btn-green .p-2 .mb-4 .text-center}  

**1. Kích thước cố định**  
   *Kích thước phải được xác định tại thời điểm biên dịch:*  
   Kích thước của mảng tĩnh phải là một hằng số hoặc một hằng số toàn cục.
   Không thể sử dụng một biến thông thường để xác định kích thước mảng tĩnh.
```cpp
const int size = 5;
int arr[size];
```
**2. Khởi tạo phần tử**  
   *Giá trị khởi tạo:*  
   Nếu không khởi tạo mảng, các phần tử trong mảng sẽ chứa giá trị ngẫu nhiên.  
   Để đảm bảo rằng các phần tử bắt đầu với giá trị cụ thể, nên khởi tạo mảng khi khai báo.
```cpp
int arr[5] = {0}; // Tất cả phần tử sẽ được khởi tạo thành 0
```
**3. Giới hạn kích thước**  
   *Kích thước tối đa:*  
   Mảng tĩnh sử dụng bộ nhớ trên stack, vì vậy kích thước của mảng tĩnh bị giới hạn bởi kích thước bộ nhớ stack.  
   Nếu kích thước quá lớn, có thể dẫn đến tràn bộ nhớ (stack overflow).
```cpp
int arr[1000000]; // Có thể gây ra lỗi tràn bộ nhớ nếu kích thước quá lớn
```
**4. Sử dụng mảng trong các hàm**  
   *Truyền mảng vào hàm:*  
   Khi bạn truyền mảng vào hàm, nó được truyền dưới dạng con trỏ đến phần tử đầu tiên.  
   Cần lưu ý rằng hàm không biết kích thước của mảng. Nên truyền kích thước của mảng như một tham số bổ sung nếu cần.
```cpp
void printArray(int arr[], int size) {
    for (int i = 0; i < size; ++i) { std::cout << arr[i] << " "; }
}
```
**5. Phạm vi (Scope) của mảng**  
   *Phạm vi sống:*  
   Mảng tĩnh được khởi tạo trong một hàm sẽ chỉ sống trong phạm vi của hàm đó. Khi ra khỏi hàm, mảng sẽ không còn tồn tại.
```cpp
void func() {
    int arr[5]; // Mảng chỉ tồn tại trong hàm func
} // Mảng arr không còn tồn tại tại đây
```
**6. Sử dụng `std::array` thay cho mảng tĩnh**  
   *Khuyến nghị:*  
   Trong nhiều trường hợp, bạn nên sử dụng `std::array` từ thư viện STL thay vì mảng tĩnh, vì nó cung cấp nhiều tính năng tiện lợi như kiểm tra kích thước và an toàn kiểu.
```cpp
#include <array>
std::array<int, 5> arr; // Cung cấp an toàn và tính năng tốt hơn
```

---


**Mảng động** (Dynamic Array)  

  
Mảng động là một mảng có kích thước được xác định và cấp phát trong thời gian chạy (runtime). Bộ nhớ cho mảng động được cấp phát trên heap bằng cách sử dụng từ khóa `new` và giải phóng bằng từ khóa `delete`.
{: .note } 

Các cách phổ biến khai báo và khởi tạo một mảng động:    
**Khai báo và khởi tạo mảng động một chiều**  
```cpp
int size = 5;
int* arr = new int[size]; // Cấp phát mảng động với kích thước 'size'
// Khởi tạo các phần tử của mảng
for (int i = 0; i < size; ++i) {
    arr[i] = i * 2; // Ví dụ: khởi tạo mảng với các giá trị là bội của 2
}
// Giải phóng bộ nhớ của mảng động
delete[] arr;
```

**Khai báo và khởi tạo mảng động hai chiều (ma trận)**
```cpp
int rows = 3;
int cols = 4;
int** matrix = new int*[rows]; // Cấp phát mảng con trỏ cho các hàng
for (int i = 0; i < rows; ++i) {
    matrix[i] = new int[cols]; // Cấp phát mảng con trỏ cho các cột
    for (int j = 0; j < cols; ++j) {
        matrix[i][j] = i + j; // Ví dụ: khởi tạo ma trận với tổng chỉ số hàng và cột
    }
}
// Giải phóng bộ nhớ của mảng động hai chiều
for (int i = 0; i < rows; ++i) {
    delete[] matrix[i]; // Giải phóng bộ nhớ của từng hàng
}
delete[] matrix; // Giải phóng bộ nhớ của mảng con trỏ
```

**Sử dụng `std::vector` để quản lý mảng động:**  
```cpp
#include <vector>

std::vector<int> vec; // Khai báo mảng động sử dụng std::vector
vec.push_back(1); // Thêm phần tử vào cuối mảng
vec.push_back(2);
```
  
  <br><br>
**Ví dụ**
```cpp
#include <iostream>
#include <vector>
using namespace std;

int main() {
    // Khai báo mảng động một chiều
    int size = 5;
    int* arr = new int[size]{1, 2, 3, 4, 5};
    
    // In mảng động một chiều
    cout << "Mảng động một chiều: ";
    for (int i = 0; i < size; ++i) {
        cout << arr[i] << " ";
    }
    cout << endl;
    
    // Giải phóng bộ nhớ của mảng động một chiều
    delete[] arr;
    
    // Khai báo và khởi tạo mảng động hai chiều
    int rows = 3;
    int cols = 4;
    int** matrix = new int*[rows];
    for (int i = 0; i < rows; ++i) {
        matrix[i] = new int[cols];
        for (int j = 0; j < cols; ++j) {
            matrix[i][j] = i + j; // Khởi tạo các giá trị trong ma trận
        }
    }
    
    // In mảng động hai chiều
    cout << "Mảng động hai chiều:" << endl;
    for (int i = 0; i < rows; ++i) {
        for (int j = 0; j < cols; ++j) {
            cout << matrix[i][j] << " ";
        }
        cout << endl;
    }
    
    // Giải phóng bộ nhớ của mảng động hai chiều
    for (int i = 0; i < rows; ++i) {
        delete[] matrix[i];
    }
    delete[] matrix;
    
    // Sử dụng std::vector để quản lý mảng động
    std::vector<int> vec;
    vec.push_back(1);
    vec.push_back(2);
    vec.push_back(3);
    
    // In std::vector
    cout << "std::vector: ";
    for (int i = 0; i < vec.size(); ++i) {
        cout << vec[i] << " ";
    }
    cout << endl;

    return 0;
}
```

  
  
## Những điểm cần lưu ý {#nhung-diem-can-luu-y-dynamic-array}
{: .btn-green .p-2 .mb-4 .text-center}  
**1. Cấp phát bộ nhớ động:**  
Bộ nhớ cho mảng động được cấp phát bằng cách sử dụng từ khóa `new`. Điều này cho phép xác định kích thước của mảng khi chương trình đang chạy.  
  
**2. Giải phóng bộ nhớ động:**  
Bộ nhớ đã cấp phát cho mảng động cần phải được giải phóng thủ công bằng cách sử dụng từ khóa `delete[]` để tránh rò rỉ bộ nhớ.  
  
**3. Kích thước linh hoạt:**  
Có thể thay đổi kích thước của mảng động bằng cách cấp phát lại bộ nhớ mới với kích thước khác. Tuy nhiên, điều này yêu cầu việc sao chép dữ liệu từ mảng cũ sang mảng mới và giải phóng bộ nhớ cũ.
