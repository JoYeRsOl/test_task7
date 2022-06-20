module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        second_name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sex: {
            type: DataTypes.BOOLEAN
        },
        photo: {
            type: DataTypes.STRING

        }
    }, {
        timestamps: true,
        createdAt: 'createdAt',
        updatedAt: false
    })
    return User
}
/*
- У каждого пользователя должно быть ID, Имя, Фамилия, Email, 
    Пароль, Пол (Мужской, Женский), Фото, Дата регистрации.

- При регистрации указывает только Имя, Email, Пароль.

- При редактировании можно менять всю информацию кроме ID, Пароля, Дата регистрации.

- При получение всех пользователей с пагинацией сортировать по дате регистрации.

- В базе данных хранить только название файла, все фото должны лежать в папке и раздаваться статически.*/