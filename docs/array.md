---
title: array
layout: default
parent: Containers
nav_order: 1
---
Mảng (tĩnh) được sử dụng để lưu trữ nhiều giá trị trong một biến duy nhất, thay vì khai báo các biến riêng biệt cho từng giá trị.
## Những điểm cần lưu ý:

1. Kích thước cố định  
   Kích thước phải được xác định tại thời điểm biên dịch:  
   Kích thước của mảng tĩnh phải là một hằng số hoặc một hằng số toàn cục.
   Không thể sử dụng một biến thông thường để xác định kích thước mảng tĩnh.
   ```cpp
   const int size = 5;
   int arr[size];
   ```
2. Khởi tạo phần tử  
   Giá trị khởi tạo:  
   Nếu không khởi tạo mảng, các phần tử trong mảng sẽ chứa giá trị ngẫu nhiên.  
   Để đảm bảo rằng các phần tử bắt đầu với giá trị cụ thể, nên khởi tạo mảng khi khai báo.
   ```cpp
   int arr[5] = {0}; // Tất cả phần tử sẽ được khởi tạo thành 0
   ```
3. Giới hạn kích thước  
   Kích thước tối đa:  
   Mảng tĩnh sử dụng bộ nhớ trên stack, vì vậy kích thước của mảng tĩnh bị giới hạn bởi kích thước bộ nhớ stack.  
   Nếu kích thước quá lớn, có thể dẫn đến tràn bộ nhớ (stack overflow).
   ```cpp
   int arr[1000000]; // Có thể gây ra lỗi tràn bộ nhớ nếu kích thước quá lớn
   ```
4. Sử dụng mảng trong các hàm  
   Truyền mảng vào hàm:  
   Khi bạn truyền mảng vào hàm, nó được truyền dưới dạng con trỏ đến phần tử đầu tiên.  
   Cần lưu ý rằng hàm không biết kích thước của mảng. Nên truyền kích thước của mảng như một tham số bổ sung nếu cần.
   ```cpp
   void printArray(int arr[], int size) {
    for (int i = 0; i < size; ++i) {
        std::cout << arr[i] << " ";
    }
}
```
5. Phạm vi (Scope) của mảng 
   Phạm vi sống: 
   Mảng tĩnh được khởi tạo trong một hàm sẽ chỉ sống trong phạm vi của hàm đó. Khi ra khỏi hàm, mảng sẽ không còn tồn tại.
```cpp
void func() {
    int arr[5]; // Mảng chỉ tồn tại trong hàm func
} // Mảng arr không còn tồn tại tại đây
```
6. Sử dụng std::array thay cho mảng tĩnh  
   Khuyến nghị:  
   Trong nhiều trường hợp, bạn nên sử dụng std::array từ thư viện STL thay vì mảng tĩnh, vì nó cung cấp nhiều tính năng tiện lợi như kiểm tra kích thước và an toàn kiểu.
```cpp
#include <array>
std::array<int, 5> arr; // Cung cấp an toàn và tính năng tốt hơn
```
