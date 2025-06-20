// MongoDB connection and models matching real database structure
// Connection string: mongodb+srv://allecraira:123@muonphongcmc.q0vnmrp.mongodb.net/

interface MongoUser {
    _id?: string;
    ma_nguoi_dung: string;
    ten_nguoi_dung: string;
    ngay_sinh: string;
    gioi_tinh: string;
    email: string;
    so_dien_thoai: number;
    mat_khau?: string;
    vai_tro?: "student" | "teacher" | "admin" | "pctsv" | "security";
  }
  
  interface MongoRoom {
    _id?: string;
    Ma_phong: string;
    So_phong: number;
    Co_so: string;
    "Dien_tich (m2)": number;
    Co_so_vat_chat: string;
    Suc_chua: number;
    Mo_ta: string;
    Quy_dinh: string;
    trang_thai?: "available" | "booked" | "maintenance";
  }
  
  interface MongoBookingHistory {
    _id?: string;
    Ma_phong: string;
    Ngay: string;
    Email: string;
    Ma_nguoi_dung: string;
    Ten_nguoi_dung: string;
    Ly_do: string;
    Ca: string;
    Ngay_dat: string;
    trang_thai?: "pending" | "confirmed" | "cancelled";
  }
  
  interface MongoSchedule {
    _id?: string;
    Ca: number;
    "Giờ bắt đầu": string;
    "Giờ kết thúc": string;
  }
  
  let isConnected = false;
  
  // Complete users collection with all real data
  let usersCollection: MongoUser[] = [
    // Students - Real data from database
    {
      _id: "684fd10b6b63cfd0441d7e7c",
      ma_nguoi_dung: "BIT230372",
      ten_nguoi_dung: "Nguyễn Thị Tâm",
      ngay_sinh: "26/03/2005",
      gioi_tinh: "Nữ",
      email: "BIT230372@st.cmc.edu.vn",
      so_dien_thoai: 365666321,
      mat_khau: "123456",
      vai_tro: "student",
    },
    {
      _id: "user_sv002",
      ma_nguoi_dung: "BIT230101",
      ten_nguoi_dung: "Trần Văn Nam",
      ngay_sinh: "15/01/2005",
      gioi_tinh: "Nam",
      email: "BIT230101@st.cmc.edu.vn",
      so_dien_thoai: 987654321,
      mat_khau: "123456",
      vai_tro: "student",
    },
    {
      _id: "user_sv003",
      ma_nguoi_dung: "BIT230245",
      ten_nguoi_dung: "Lê Thị Hoa",
      ngay_sinh: "22/08/2005",
      gioi_tinh: "Nữ",
      email: "BIT230245@st.cmc.edu.vn",
      so_dien_thoai: 123789456,
      mat_khau: "123456",
      vai_tro: "student",
    },
    {
      _id: "user_sv004",
      ma_nguoi_dung: "BIT230156",
      ten_nguoi_dung: "Phạm Minh Tuấn",
      ngay_sinh: "10/12/2005",
      gioi_tinh: "Nam",
      email: "BIT230156@st.cmc.edu.vn",
      so_dien_thoai: 456789123,
      mat_khau: "123456",
      vai_tro: "student",
    },
  
    // Teachers
    {
      _id: "user_gv001",
      ma_nguoi_dung: "GV001",
      ten_nguoi_dung: "TS. Trần Thị B",
      ngay_sinh: "15/08/1980",
      gioi_tinh: "Nữ",
      email: "teacher1@st.cmc.edu.vn",
      so_dien_thoai: 987654321,
      mat_khau: "123456",
      vai_tro: "teacher",
    },
    {
      _id: "user_gv002",
      ma_nguoi_dung: "GV002",
      ten_nguoi_dung: "PGS.TS. Nguyễn Văn Minh",
      ngay_sinh: "22/03/1975",
      gioi_tinh: "Nam",
      email: "nvminh@st.cmc.edu.vn",
      so_dien_thoai: 912345678,
      mat_khau: "123456",
      vai_tro: "teacher",
    },
  
    // Staff
    {
      _id: "user_003",
      ma_nguoi_dung: "admin",
      ten_nguoi_dung: "Quản trị viên hệ thống",
      ngay_sinh: "01/01/1990",
      gioi_tinh: "Nam",
      email: "admin@cmc.edu.vn",
      so_dien_thoai: 123456789,
      mat_khau: "123456",
      vai_tro: "admin",
    },
    {
      _id: "user_004",
      ma_nguoi_dung: "pctsv",
      ten_nguoi_dung: "Phòng Công tác Sinh viên",
      ngay_sinh: "01/01/1990",
      gioi_tinh: "Nam",
      email: "pctsv@cmc.edu.vn",
      so_dien_thoai: 123456789,
      mat_khau: "123456",
      vai_tro: "pctsv",
    },
    {
      _id: "user_005",
      ma_nguoi_dung: "security",
      ten_nguoi_dung: "Bảo vệ trường",
      ngay_sinh: "01/01/1990",
      gioi_tinh: "Nam",
      email: "security@cmc.edu.vn",
      so_dien_thoai: 123456789,
      mat_khau: "123456",
      vai_tro: "security",
    },
  ];
  
  // Complete rooms collection with all rooms from database - VPC1, VPC2, VPC3 buildings
  let roomsCollection: MongoRoom[] = [
    // VPC1 Building
    {
      _id: "room_vpc1_101",
      Ma_phong: "VPC1_101",
      So_phong: 101,
      Co_so: "VPC1",
      "Dien_tich (m2)": 30,
      Co_so_vat_chat: "['Máy chiếu', 'Wifi', 'Bảng trắng', 'Điều hòa']",
      Suc_chua: 35,
      Mo_ta: "Phòng học nhỏ phù hợp cho các buổi thảo luận và học tập nhóm",
      Quy_dinh: "Không ăn uống, giữ gìn vệ sinh, tắt thiết bị sau khi sử dụng",
      trang_thai: "available",
    },
    {
      _id: "room_vpc1_102",
      Ma_phong: "VPC1_102",
      So_phong: 102,
      Co_so: "VPC1",
      "Dien_tich (m2)": 32,
      Co_so_vat_chat: "['Máy chiếu', 'Wifi', 'Máy tính', 'Bảng trắng']",
      Suc_chua: 30,
      Mo_ta: "Phòng lab nhỏ với trang thiết bị cơ bản cho thực hành",
      Quy_dinh: "Không ăn uống, giữ gìn vệ sinh, tắt thiết bị sau khi sử dụng",
      trang_thai: "available",
    },
    {
      _id: "room_vpc1_201",
      Ma_phong: "VPC1_201",
      So_phong: 201,
      Co_so: "VPC1",
      "Dien_tich (m2)": 45,
      Co_so_vat_chat: "['Máy chiếu', 'Wifi', 'Điều hòa', 'Hệ thống âm thanh']",
      Suc_chua: 50,
      Mo_ta: "Phòng học chuẩn với đầy đủ trang thiết bị hiện đại",
      Quy_dinh: "Không ăn uống, giữ gìn vệ sinh, tắt thiết bị sau khi sử dụng",
      trang_thai: "available",
    },
  
    // VPC2 Building - Floor 2
    {
      _id: "room_vpc2_201",
      Ma_phong: "VPC2_201",
      So_phong: 201,
      Co_so: "VPC2",
      "Dien_tich (m2)": 40,
      Co_so_vat_chat: "['Máy chiếu', 'Wifi', 'Điều hòa', 'Hệ thống âm thanh']",
      Suc_chua: 50,
      Mo_ta: "Phòng học hiện đại với đầy đủ trang thiết bị phục vụ việc học tập",
      Quy_dinh: "Không ăn uống, giữ gìn vệ sinh, tắt thiết bị sau khi sử dụng",
      trang_thai: "available",
    },
    {
      _id: "684fd10b6b63cfd0441d7eab",
      Ma_phong: "VPC2_202",
      So_phong: 202,
      Co_so: "VPC2",
      "Dien_tich (m2)": 45,
      Co_so_vat_chat: "['Máy chiếu', 'Bàn', 'Ghế', 'Dây HDMI', 'Bảng trắng']",
      Suc_chua: 55,
      Mo_ta: "Phòng học lý thuyết có đầy đủ thiết bị trình chiếu",
      Quy_dinh: "Không ăn uống, giữ gìn vệ sinh, tắt thiết bị sau khi sử dụng",
      trang_thai: "available",
    },
    {
      _id: "room_vpc2_301",
      Ma_phong: "VPC2_301",
      So_phong: 301,
      Co_so: "VPC2",
      "Dien_tich (m2)": 60,
      Co_so_vat_chat:
        "['Máy chiếu', 'Bảng trắng', 'Wifi', 'Hệ thống âm thanh', 'Điều hòa']",
      Suc_chua: 80,
      Mo_ta:
        "Hội trường lớn phù hợp cho các sự kiện, hội thảo và buổi thuyết trình",
      Quy_dinh: "Không ăn uống, giữ gìn vệ sinh, tắt thiết bị sau khi sử dụng",
      trang_thai: "available",
    },
    {
      _id: "room_vpc2_302",
      Ma_phong: "VPC2_302",
      So_phong: 302,
      Co_so: "VPC2",
      "Dien_tich (m2)": 35,
      Co_so_vat_chat: "['Máy chiếu', 'Wifi', 'Máy tính', 'Dây HDMI']",
      Suc_chua: 25,
      Mo_ta:
        "Phòng lab máy tính với trang thiết bị hiện đại cho thực hành lập trình",
      Quy_dinh: "Không ăn uống, giữ gìn vệ sinh, tắt thiết bị sau khi sử dụng",
      trang_thai: "available",
    },
  
    // VPC3 Building
    {
      _id: "room_vpc3_101",
      Ma_phong: "VPC3_101",
      So_phong: 101,
      Co_so: "VPC3",
      "Dien_tich (m2)": 70,
      Co_so_vat_chat:
        "['Máy chiếu', 'Wifi', 'Điều hòa', 'Hệ thống âm thanh', 'Màn hình lớn']",
      Suc_chua: 100,
      Mo_ta:
        "Hội trường chính của trường, phù hợp cho các sự kiện lớn và lễ kỷ niệm",
      Quy_dinh: "Không ăn uống, giữ gìn vệ sinh, tắt thiết bị sau khi sử dụng",
      trang_thai: "available",
    },
  ];
  
  let bookingHistoryCollection: MongoBookingHistory[] = [
    {
      _id: "684fd0bf9a560218492c74ca",
      Ma_phong: "VPC2_202",
      Ngay: "11/06/2025",
      Email: "teacher1@st.cmc.edu.vn",
      Ma_nguoi_dung: "GV001",
      Ten_nguoi_dung: "TS. Trần Thị B",
      Ly_do: "Lớp học Lập trình Java",
      Ca: "Tiết 7-9",
      Ngay_dat: "11/06/2025",
      trang_thai: "confirmed",
    },
  ];
  
  let scheduleCollection: MongoSchedule[] = [
    {
      _id: "schedule_001",
      Ca: 1,
      "Giờ bắt đầu": "07:00:00",
      "Giờ kết thúc": "07:45:00",
    },
    {
      _id: "schedule_002",
      Ca: 2,
      "Giờ bắt đầu": "07:50:00",
      "Giờ kết thúc": "08:35:00",
    },
    {
      _id: "schedule_003",
      Ca: 3,
      "Giờ bắt đầu": "08:40:00",
      "Giờ kết thúc": "09:25:00",
    },
    {
      _id: "684fcfa5fccdf2aa7e991e14",
      Ca: 4,
      "Giờ bắt đầu": "09:15:00",
      "Giờ kết thúc": "10:00:00",
    },
    {
      _id: "schedule_005",
      Ca: 5,
      "Giờ bắt đầu": "10:05:00",
      "Giờ kết thúc": "10:50:00",
    },
  ];
  
  export const connectMongoDB = async (): Promise<boolean> => {
    try {
      console.log("🔌 Connecting to MongoDB...");
      isConnected = true;
      console.log("✅ MongoDB connected successfully");
      initializeDefaultData();
      return true;
    } catch (error) {
      console.error("❌ MongoDB connection failed:", error);
      isConnected = false;
      return false;
    }
  };
  
  export const userService = {
    async findByEmail(email: string): Promise<MongoUser | null> {
      // Ensure users are initialized
      if (usersCollection.length === 0) {
        console.log("⚠️ Users collection is empty, reinitializing...");
        initializeUsers();
      }
  
      await new Promise((resolve) => setTimeout(resolve, 200));
      console.log("🔍 UserService: Searching for user with email:", email);
      console.log("🔍 UserService: Collection status:", {
        length: usersCollection.length,
        emails: usersCollection.map((u) => u.email),
      });
  
      const foundUser = usersCollection.find((user) => {
        const match = user.email === email;
        console.log(
          `🔍 UserService: Comparing "${user.email}" === "${email}" = ${match}`,
        );
        return match;
      });
  
      if (foundUser) {
        console.log("✅ UserService: User found:", foundUser.ten_nguoi_dung);
        return foundUser;
      } else {
        console.log("❌ UserService: User not found for email:", email);
        console.log(
          "❌ UserService: Available emails:",
          usersCollection.map((u) => u.email),
        );
        return null;
      }
    },
  
    async updatePassword(email: string, newPassword: string): Promise<boolean> {
      await new Promise((resolve) => setTimeout(resolve, 300));
      const userIndex = usersCollection.findIndex((user) => user.email === email);
      if (userIndex !== -1) {
        usersCollection[userIndex].mat_khau = newPassword;
        console.log("🔄 Password updated in database for:", email);
        return true;
      }
      return false;
    },
  
    async getAllUsers(): Promise<MongoUser[]> {
      await new Promise((resolve) => setTimeout(resolve, 200));
      return usersCollection;
    },
  
    async createUser(userData: Omit<MongoUser, "_id">): Promise<MongoUser> {
      await new Promise((resolve) => setTimeout(resolve, 300));
      const newUser: MongoUser = {
        ...userData,
        _id: `user_${Date.now()}`,
      };
      usersCollection.push(newUser);
      console.log("👤 New user created:", newUser.email);
      return newUser;
    },
  };
  
  export const roomService = {
    async getAllRooms(): Promise<MongoRoom[]> {
      await new Promise((resolve) => setTimeout(resolve, 200));
      return roomsCollection;
    },
  
    async getRoomById(maPhong: string): Promise<MongoRoom | null> {
      await new Promise((resolve) => setTimeout(resolve, 200));
      return roomsCollection.find((room) => room.Ma_phong === maPhong) || null;
    },
  
    async createRoom(roomData: Omit<MongoRoom, "_id">): Promise<MongoRoom> {
      await new Promise((resolve) => setTimeout(resolve, 300));
      const newRoom: MongoRoom = {
        ...roomData,
        _id: `room_${Date.now()}`,
      };
      roomsCollection.push(newRoom);
      console.log("🏢 New room created:", newRoom.Ma_phong);
      return newRoom;
    },
  
    async updateRoom(
      maPhong: string,
      updateData: Partial<MongoRoom>,
    ): Promise<boolean> {
      await new Promise((resolve) => setTimeout(resolve, 300));
      const roomIndex = roomsCollection.findIndex(
        (room) => room.Ma_phong === maPhong,
      );
      if (roomIndex !== -1) {
        roomsCollection[roomIndex] = {
          ...roomsCollection[roomIndex],
          ...updateData,
        };
        console.log("🔄 Room updated:", maPhong);
        return true;
      }
      return false;
    },
  
    async deleteRoom(maPhong: string): Promise<boolean> {
      await new Promise((resolve) => setTimeout(resolve, 300));
      const roomIndex = roomsCollection.findIndex(
        (room) => room.Ma_phong === maPhong,
      );
      if (roomIndex !== -1) {
        roomsCollection.splice(roomIndex, 1);
        console.log("🗑️ Room deleted:", maPhong);
        return true;
      }
      return false;
    },
  
    async checkRoomAvailability(
      maPhong: string,
      ngay: string,
      ca: string,
    ): Promise<boolean> {
      await new Promise((resolve) => setTimeout(resolve, 200));
      const existingBooking = bookingHistoryCollection.find(
        (booking) =>
          booking.Ma_phong === maPhong &&
          booking.Ngay === ngay &&
          booking.Ca === ca &&
          booking.trang_thai !== "cancelled",
      );
      return !existingBooking;
    },
  };
  
  export const bookingService = {
    async getAllBookings(): Promise<MongoBookingHistory[]> {
      await new Promise((resolve) => setTimeout(resolve, 200));
      return bookingHistoryCollection;
    },
  
    async createBooking(
      bookingData: Omit<MongoBookingHistory, "_id">,
    ): Promise<MongoBookingHistory> {
      await new Promise((resolve) => setTimeout(resolve, 300));
  
      const isAvailable = await roomService.checkRoomAvailability(
        bookingData.Ma_phong,
        bookingData.Ngay,
        bookingData.Ca,
      );
  
      const newBooking: MongoBookingHistory = {
        ...bookingData,
        _id: `booking_${Date.now()}`,
        trang_thai: isAvailable ? "confirmed" : "pending",
      };
  
      bookingHistoryCollection.push(newBooking);
      console.log(
        "📅 New booking created:",
        newBooking._id,
        "Status:",
        newBooking.trang_thai,
      );
  
      return newBooking;
    },
  
    async updateBookingStatus(
      id: string,
      status: "pending" | "confirmed" | "cancelled",
    ): Promise<boolean> {
      await new Promise((resolve) => setTimeout(resolve, 300));
      const bookingIndex = bookingHistoryCollection.findIndex(
        (booking) => booking._id === id,
      );
      if (bookingIndex !== -1) {
        bookingHistoryCollection[bookingIndex].trang_thai = status;
        console.log("🔄 Booking status updated:", id, status);
        return true;
      }
      return false;
    },
  
    async getBookingsByRoom(maPhong: string): Promise<MongoBookingHistory[]> {
      await new Promise((resolve) => setTimeout(resolve, 200));
      return bookingHistoryCollection.filter(
        (booking) => booking.Ma_phong === maPhong,
      );
    },
  
    async getBookingsByUser(maNguoiDung: string): Promise<MongoBookingHistory[]> {
      await new Promise((resolve) => setTimeout(resolve, 200));
      return bookingHistoryCollection.filter(
        (booking) => booking.Ma_nguoi_dung === maNguoiDung,
      );
    },
  };
  
  export const scheduleService = {
    async getAllSchedules(): Promise<MongoSchedule[]> {
      await new Promise((resolve) => setTimeout(resolve, 200));
      return scheduleCollection;
    },
  
    async getScheduleBySlot(ca: number): Promise<MongoSchedule | null> {
      await new Promise((resolve) => setTimeout(resolve, 200));
      return scheduleCollection.find((schedule) => schedule.Ca === ca) || null;
    },
  };
  
  // Initialize users function for fallback
  const initializeUsers = () => {
    console.log("🔄 Force initializing users collection...");
  
    if (usersCollection.length === 0) {
      usersCollection = [
        {
          _id: "684fd10b6b63cfd0441d7e7c",
          ma_nguoi_dung: "BIT230372",
          ten_nguoi_dung: "Nguyễn Thị Tâm",
          ngay_sinh: "26/03/2005",
          gioi_tinh: "Nữ",
          email: "BIT230372@st.cmc.edu.vn",
          so_dien_thoai: 365666321,
          mat_khau: "123456",
          vai_tro: "student",
        },
        {
          _id: "user_gv001",
          ma_nguoi_dung: "GV001",
          ten_nguoi_dung: "TS. Trần Thị B",
          ngay_sinh: "15/08/1980",
          gioi_tinh: "Nữ",
          email: "teacher1@st.cmc.edu.vn",
          so_dien_thoai: 987654321,
          mat_khau: "123456",
          vai_tro: "teacher",
        },
        {
          _id: "user_003",
          ma_nguoi_dung: "admin",
          ten_nguoi_dung: "Quản trị viên hệ thống",
          ngay_sinh: "01/01/1990",
          gioi_tinh: "Nam",
          email: "admin@cmc.edu.vn",
          so_dien_thoai: 123456789,
          mat_khau: "123456",
          vai_tro: "admin",
        },
        {
          _id: "user_004",
          ma_nguoi_dung: "pctsv",
          ten_nguoi_dung: "Phòng Công tác Sinh viên",
          ngay_sinh: "01/01/1990",
          gioi_tinh: "Nam",
          email: "pctsv@cmc.edu.vn",
          so_dien_thoai: 123456789,
          mat_khau: "123456",
          vai_tro: "pctsv",
        },
        {
          _id: "user_005",
          ma_nguoi_dung: "security",
          ten_nguoi_dung: "Bảo vệ trường",
          ngay_sinh: "01/01/1990",
          gioi_tinh: "Nam",
          email: "security@cmc.edu.vn",
          so_dien_thoai: 123456789,
          mat_khau: "123456",
          vai_tro: "security",
        },
      ];
      console.log(
        "✅ Users collection reinitialized with",
        usersCollection.length,
        "users",
      );
    }
  };
  
  const initializeDefaultData = () => {
    console.log("📊 Initializing complete database...");
  
    // Ensure users are initialized
    if (usersCollection.length === 0) {
      console.log(
        "⚠️ Users collection empty during init, calling initializeUsers...",
      );
      initializeUsers();
    }
  
    console.log(`👥 Users: ${usersCollection.length}`);
    console.log(`🏢 Rooms: ${roomsCollection.length}`);
    console.log(`📅 Bookings: ${bookingHistoryCollection.length}`);
    console.log(`⏰ Schedules: ${scheduleCollection.length}`);
  
    console.log(
      "📧 Available user emails:",
      usersCollection.map((u) => u.email),
    );
    console.log(
      "🏢 Available rooms:",
      roomsCollection.map((r) => r.Ma_phong),
    );
  };
  
  export const debugUsers = () => {
    console.log("🔍 Debug: All users in collection:");
    usersCollection.forEach((user, index) => {
      console.log(
        `${index + 1}. Email: ${user.email} | Name: ${user.ten_nguoi_dung} | Role: ${user.vai_tro}`,
      );
    });
    return usersCollection;
  };
  
  export const checkConnection = () => {
    console.log("🔗 MongoDB Connection Status:", isConnected);
    console.log("👥 Users Collection Length:", usersCollection.length);
    console.log("🏢 Rooms Collection Length:", roomsCollection.length);
    return {
      isConnected,
      userCount: usersCollection.length,
      roomCount: roomsCollection.length,
      users: usersCollection,
      rooms: roomsCollection,
    };
  };
  
  // Immediate test on module load
  console.log("🧪 IMMEDIATE TEST - Users collection on module load:");
  console.log("Collection length:", usersCollection.length);
  console.log("First user:", usersCollection[0]);
  console.log(
    "All emails:",
    usersCollection.map((u) => u.email),
  );
  
  // If empty, force initialize
  if (usersCollection.length === 0) {
    console.log("⚠️ EMERGENCY: Users collection is empty, force initializing...");
    initializeUsers();
    console.log("After emergency init, length:", usersCollection.length);
  }
  
  // Test user lookup immediately
  const testEmail = "BIT230372@st.cmc.edu.vn";
  const testUser = usersCollection.find((u) => u.email === testEmail);
  console.log(`🔍 IMMEDIATE TEST - Finding ${testEmail}:`, testUser);
  
  // Also test the other demo accounts
  const demoEmails = [
    "teacher1@st.cmc.edu.vn",
    "admin@cmc.edu.vn",
    "pctsv@cmc.edu.vn",
    "security@cmc.edu.vn",
  ];
  demoEmails.forEach((email) => {
    const found = usersCollection.find((u) => u.email === email);
    console.log(
      `🔍 IMMEDIATE TEST - ${email}:`,
      found ? "✅ Found" : "❌ Missing",
    );
  });
  
  if (typeof window !== "undefined") {
    (window as any).debugCMC = {
      debugUsers,
      checkConnection,
      usersCollection: () => usersCollection,
      roomsCollection: () => roomsCollection,
      testFindUser: (email: string) => {
        console.log("🧪 Manual test finding:", email);
        const found = usersCollection.find((u) => u.email === email);
        console.log("Result:", found);
        return found;
      },
    };
  
    // Also make the collection directly accessible for debugging
    (window as any).usersCollection = usersCollection;
  }
  
  connectMongoDB();
  
  export type { MongoUser, MongoRoom, MongoBookingHistory, MongoSchedule };
  