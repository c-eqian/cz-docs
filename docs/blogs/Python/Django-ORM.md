---
title: Django-ORM
date: 2022-12-30 19:43:43
author: 秋谨
categories:
  - python
tags:
  - python
  - Django
  - ORM
---

# 创建应用

```python
python3 manage.py startapp 应用名称
```

![](https://c-typora.oss-cn-guangzhou.aliyuncs.com/c-typora/image-20221230195405956.png)



# ORM-数据库创建

在`book`文件中的`models.py`创建表

```python
from django.db import models


# Create your models here.
class Book(models.Model):
    title = models.CharField(max_length=50)
    book_name = models.CharField(max_length=50)
    author = models.CharField(max_length=20)
     # int自增列，必须填入参数 primary_key=True。当model中没有指定主键，django自动会创建一个列名为id的列，做为主键。
    a = models.AutoField(primary_key=True)  # 主键
    # 最常用的字段，必须指定max_length字符长度
    b = models.CharField(max_length=24, null=False)  # 项目名称
    # 布尔型和NullBooleanField有区别，True/False，本类型不允许出现null。
    c = models.BooleanField(default=True)  # 是否有效
    # 可以为null的布尔型
    d = models.NullBooleanField(default=True)  # 是否显示
    # json类型
    e = models.JSONField()  # 事件明细
    # UUID
    f = models.UUIDField()
    # 小整数 - 32768 ～ 32767
    g = models.SmallIntegerField()
    # 正小整数 0 ～ 32767
    h = models.PositiveSmallIntegerField()
    # 整数列(有符号的) -2147483648 ～ 2147483647
    i = models.IntegerField()
    # 正整数 0 ～ 2147483647
    j = models.PositiveIntegerField()
    # 长整型(有符号的) -9223372036854775808 ～ 9223372036854775807
    k = models.BigIntegerField()
    # 长整数，时间间隔，数据库中按照bigint存储，ORM中获取的值为datetime.timedelta类型
    l = models.DurationField()
    # 浮点型
    m = models.FloatField()
    # 金额型->100.12
    n = models.DecimalField(max_digits=5, decimal_places=2)
    # 二进制类型
    o = models.BinaryField()
    # 一对多
    p = models.ForeignKey(to=ForeignKey,  # 关联那张表
                          to_field='project_id',  # 关联表的那个字段，可以不指定，不指定就和关联表的主键关联
                          db_constraint=False,  # 是否生成外键约束（默认为True）
                          related_name="_project_id",  # 反向查询名称
                          on_delete=models.PROTECT,  # 关联删除选项
                          db_column='project_id',  # 设置表中的名称
                          help_text='关联到Event表的project_id',  # 说明字段，会显示在admin后台，不会同步到数据库
                          )
    # 一对一，和一对多系统，只是默认加了unique=True
    q = models.OneToOneField(to=ForeignKey,  # 关联那张表
                             to_field='project_id',  # 关联表的那个字段，可以不指定，不指定就和关联表的主键关联
                             db_constraint=False,  # 是否生成外键约束（默认为True）
                             related_name="_project_id",  # 反向查询名称
                             on_delete=models.PROTECT,  # 关联删除选项
                             db_column='project_id',  # 设置表中的名称
                             help_text='关联到Event表的project_id',  # 说明字段，会显示在admin后台，不会同步到数据库
                             )
    # 多对多
    # 手动创建第三张表，虽然可以使用orm的查询方法，但不支持使用add(), set(), remove(), clear()
    r = models.ManyToManyField(to='ForeignKey',  # 关联那张表，也就是说和那张表关联
                               through='ForeignMany',  # 自定义第三张表，可以不设置，不设置Django就自动生成第三张表
                               through_fields=('book', 'author')  # 自定义第三张表中，那个二个字段管理主表和关联表，可以不设置
                               )
    # 创建时间，创建数据记录的时候会把当前时添加到数据库。
    s = models.DateTimeField(auto_now_add=True)
    # 修改时间，每次更新数据记录的时候会更新该字段。
    t = models.DateTimeField(auto_now=True)
  class Meta:
    # 模型在数据库中的表名默认是 APP名称_类名，可以通过db_table重新默认值，相当于指定模型在数据库中的表明
    db_table = '表名称'
```

# ORM-约束

```python
on_delete = models.CASCADE # 删除关联数据的时候，与之的关联也删除
on_delete = models.DO_NOTHING # 删除关联数据的时候，什么操作也不做
on_delete = models.PROTRCT # 删除关联数据的时候，引发报错
on_delete = models.SET_NULL # 删除关联数据的时候，与之关联的只设置为空
on_delete = models.SET_DEFAULT # 删除关联数据的时候，与之关联的只设置为默认值
on_delete = models.SET # 删除关联数据
```

# ORM-增

```python
   # 方式一： 通过调用`create`方法进行数据新增操作
    from book.models import *
    Book.objects.create(title='亲张森', book_name='is-me', author='LZ')
    Book.objects.create(title='亲张森1', book_name='is-you', author='ZL')
   # 方式二
    book = Book(title='哈哈', book_name='很好', author='CZ')
    book.save()  # 保存
```

# ORM-查

## 根据条件查询

```python
    # 如果多条，拿到第一条数据
    # res = Book.objects.filter(author='靓仔')[0] # 方式一
    res = Book.objects.filter(author='靓仔').first()  # 方式二
    print(res.title)
```

## 查询所有数据

```python
    # 查询所有数据
    res = Book.objects.filter()  # 方式一
    # res = Book.objects.all()  # 方式二
    for item in res:
        print(item.title)
```

![](https://c-typora.oss-cn-guangzhou.aliyuncs.com/c-typora/image-20221231101405317.png)

# ORM-改

```python
    """
    修改数据
    """
    # Book.objects.filter(id=1).update(title='冲冲', author='千里') # 方式一
    res = Book.objects.filter(id=2).first()  # 方式二
    res.title = '跨年'
    res.author = '万里'
    res.save()
```

![image-20221231102523323](https://c-typora.oss-cn-guangzhou.aliyuncs.com/c-typora/image-20221231102523323.png)

# ORM-删

```python
    """
    删除数据
    """
    Book.objects.filter(id=3).delete() # 直接删除
```

![image-20221231102746028](https://c-typora.oss-cn-guangzhou.aliyuncs.com/c-typora/image-20221231102746028.png)

