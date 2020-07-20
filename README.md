## Sidebar - Dashboard

- Yapı olarak sidebar, toolbar ve content bulunmaktadır.
- AppRoutingModule üzerinde router ile farklı sayfalar arasında geçiş yapılmaktadır.
- Layout olarak side bar bulunmakta ve sayfaya göre content kısmı değişmektedir.
- Farklı sayfa yapıları olsaydı örneğin login gibi o zaman bir layout daha ekleyebilirdim.
- Service katmanı bulunmamaktadır.
- Chartlar için chart.js dependence kullandım.
- Tema olarak hazır bir tema kullandım.
- Grafikler için tarih aralığı ve yenileme süresi girilmesi için setting ekranı yaptım. Oradan girilen 
değerler localstorage'da tutuluyor. Service ile bağlandıktan sonra grafiklerin olduğu ekrandan ulaşılarak düzenlenebilir.
- Bootstrap kullandım.

'ng serve' komutu ile çalıştırdıktan sonra http://localhost:4200/ url ile yönlendirme yapabilirsiniz.
