[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / UsersServiceCountReq

# Class: UsersServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.UsersServiceCountReq

## Hierarchy

- `Message`\<[`UsersServiceCountReq`](UsersServiceCountReq.md)\>

  ↳ **`UsersServiceCountReq`**

## Table of contents

### Constructors

- [constructor](UsersServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](UsersServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](UsersServiceCountReq.md#approvedonend)
- [approvedOnStart](UsersServiceCountReq.md#approvedonstart)
- [approverRoleId](UsersServiceCountReq.md#approverroleid)
- [attendanceUomId](UsersServiceCountReq.md#attendanceuomid)
- [basicPayUomId](UsersServiceCountReq.md#basicpayuomid)
- [clientId](UsersServiceCountReq.md#clientid)
- [code](UsersServiceCountReq.md#code)
- [creationTimestampEnd](UsersServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](UsersServiceCountReq.md#creationtimestampstart)
- [departmentId](UsersServiceCountReq.md#departmentid)
- [email](UsersServiceCountReq.md#email)
- [entityUuid](UsersServiceCountReq.md#entityuuid)
- [isActive](UsersServiceCountReq.md#isactive)
- [modificationTimestampEnd](UsersServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](UsersServiceCountReq.md#modificationtimestampstart)
- [name](UsersServiceCountReq.md#name)
- [payrollCurrencyId](UsersServiceCountReq.md#payrollcurrencyid)
- [payrollGroupId](UsersServiceCountReq.md#payrollgroupid)
- [payrollTaxGroupId](UsersServiceCountReq.md#payrolltaxgroupid)
- [phone](UsersServiceCountReq.md#phone)
- [roleId](UsersServiceCountReq.md#roleid)
- [shiftGroupId](UsersServiceCountReq.md#shiftgroupid)
- [status](UsersServiceCountReq.md#status)
- [userType](UsersServiceCountReq.md#usertype)
- [username](UsersServiceCountReq.md#username)
- [vendorId](UsersServiceCountReq.md#vendorid)
- [workEmail](UsersServiceCountReq.md#workemail)
- [fields](UsersServiceCountReq.md#fields)
- [runtime](UsersServiceCountReq.md#runtime)
- [typeName](UsersServiceCountReq.md#typename)

### Methods

- [clone](UsersServiceCountReq.md#clone)
- [equals](UsersServiceCountReq.md#equals)
- [fromBinary](UsersServiceCountReq.md#frombinary)
- [fromJson](UsersServiceCountReq.md#fromjson)
- [fromJsonString](UsersServiceCountReq.md#fromjsonstring)
- [getType](UsersServiceCountReq.md#gettype)
- [toBinary](UsersServiceCountReq.md#tobinary)
- [toJSON](UsersServiceCountReq.md#tojson)
- [toJson](UsersServiceCountReq.md#tojson-1)
- [toJsonString](UsersServiceCountReq.md#tojsonstring)
- [equals](UsersServiceCountReq.md#equals-1)
- [fromBinary](UsersServiceCountReq.md#frombinary-1)
- [fromJson](UsersServiceCountReq.md#fromjson-1)
- [fromJsonString](UsersServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new UsersServiceCountReq**(`data?`): [`UsersServiceCountReq`](UsersServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`UsersServiceCountReq`](UsersServiceCountReq.md)\> |

#### Returns

[`UsersServiceCountReq`](UsersServiceCountReq.md)

#### Overrides

Message\&lt;UsersServiceCountReq\&gt;.constructor

#### Defined in

src/users.scailo_pb.ts:1778

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

src/users.scailo_pb.ts:1654

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

src/users.scailo_pb.ts:1647

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

src/users.scailo_pb.ts:1640

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

src/users.scailo_pb.ts:1661

___

### attendanceUomId

• **attendanceUomId**: `bigint` = `protoInt64.zero`

The associated unit of material of the user's attendance record

**`Generated`**

from field: uint64 attendance_uom_id = 27;

#### Defined in

src/users.scailo_pb.ts:1717

___

### basicPayUomId

• **basicPayUomId**: `bigint` = `protoInt64.zero`

The associated unit of material for storing the basic pay amount

**`Generated`**

from field: uint64 basic_pay_uom_id = 32;

#### Defined in

src/users.scailo_pb.ts:1752

___

### clientId

• **clientId**: `bigint` = `protoInt64.zero`

Filter by the associated client ID (return all the users that belong to this client)

--------------------------------------------------------------------------------

**`Generated`**

from field: uint64 client_id = 71;

#### Defined in

src/users.scailo_pb.ts:1776

___

### code

• **code**: `string` = `""`

The unique code by which the user is classified

**`Generated`**

from field: string code = 22;

#### Defined in

src/users.scailo_pb.ts:1682

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/users.scailo_pb.ts:1598

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/users.scailo_pb.ts:1591

___

### departmentId

• **departmentId**: `bigint` = `protoInt64.zero`

The associated department

**`Generated`**

from field: uint64 department_id = 28;

#### Defined in

src/users.scailo_pb.ts:1724

___

### email

• **email**: `string` = `""`

The primary email of the user

**`Generated`**

from field: string email = 23;

#### Defined in

src/users.scailo_pb.ts:1689

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/users.scailo_pb.ts:1626

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/users.scailo_pb.ts:1584

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/users.scailo_pb.ts:1612

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/users.scailo_pb.ts:1605

___

### name

• **name**: `string` = `""`

The name of the user

**`Generated`**

from field: string name = 21;

#### Defined in

src/users.scailo_pb.ts:1675

___

### payrollCurrencyId

• **payrollCurrencyId**: `bigint` = `protoInt64.zero`

The associated currency ID of the user's payroll

**`Generated`**

from field: uint64 payroll_currency_id = 31;

#### Defined in

src/users.scailo_pb.ts:1745

___

### payrollGroupId

• **payrollGroupId**: `bigint` = `protoInt64.zero`

The associated payroll group ID of the user

**`Generated`**

from field: uint64 payroll_group_id = 29;

#### Defined in

src/users.scailo_pb.ts:1731

___

### payrollTaxGroupId

• **payrollTaxGroupId**: `bigint` = `protoInt64.zero`

The associated tax group ID using which the user's payroll needs to be calculated

**`Generated`**

from field: uint64 payroll_tax_group_id = 30;

#### Defined in

src/users.scailo_pb.ts:1738

___

### phone

• **phone**: `string` = `""`

The primary contact number of the user

**`Generated`**

from field: string phone = 24;

#### Defined in

src/users.scailo_pb.ts:1696

___

### roleId

• **roleId**: `bigint` = `protoInt64.zero`

The associated role ID

**`Generated`**

from field: uint64 role_id = 25;

#### Defined in

src/users.scailo_pb.ts:1703

___

### shiftGroupId

• **shiftGroupId**: `bigint` = `protoInt64.zero`

The associated shift group ID

**`Generated`**

from field: uint64 shift_group_id = 26;

#### Defined in

src/users.scailo_pb.ts:1710

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this user

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/users.scailo_pb.ts:1633

___

### userType

• **userType**: [`USER_TYPE`](../enums/USER_TYPE.md) = `USER_TYPE.USER_TYPE_ANY_UNSPECIFIED`

Stores the user type

**`Generated`**

from field: Scailo.USER_TYPE user_type = 7;

#### Defined in

src/users.scailo_pb.ts:1619

___

### username

• **username**: `string` = `""`

The username of the user

**`Generated`**

from field: string username = 20;

#### Defined in

src/users.scailo_pb.ts:1668

___

### vendorId

• **vendorId**: `bigint` = `protoInt64.zero`

--------------------------------------------------------------------------------
Filter by the associated vendor ID (return all the users that belong to this vendor)

**`Generated`**

from field: uint64 vendor_id = 70;

#### Defined in

src/users.scailo_pb.ts:1767

___

### workEmail

• **workEmail**: `string` = `""`

The optional work email of the user

**`Generated`**

from field: string work_email = 33;

#### Defined in

src/users.scailo_pb.ts:1759

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/users.scailo_pb.ts:1785

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/users.scailo_pb.ts:1783

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.UsersServiceCountReq"``

#### Defined in

src/users.scailo_pb.ts:1784

## Methods

### clone

▸ **clone**(): [`UsersServiceCountReq`](UsersServiceCountReq.md)

Create a deep copy.

#### Returns

[`UsersServiceCountReq`](UsersServiceCountReq.md)

#### Inherited from

Message.clone

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:28

___

### equals

▸ **equals**(`other`): `boolean`

Compare with a message of the same type.
Note that this function disregards extensions and unknown fields.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `undefined` \| ``null`` \| [`UsersServiceCountReq`](UsersServiceCountReq.md) \| `PlainMessage`\<[`UsersServiceCountReq`](UsersServiceCountReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:24

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): `this`

Parse from binary data, merging fields.

Repeated fields are appended. Map entries are added, overwriting
existing keys.

If a message field is already present, it will be merged with the
new data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:38

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): `this`

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:42

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): `this`

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:46

___

### getType

▸ **getType**(): `MessageType`\<[`UsersServiceCountReq`](UsersServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`UsersServiceCountReq`](UsersServiceCountReq.md)\>

#### Inherited from

Message.getType

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:81

___

### toBinary

▸ **toBinary**(`options?`): `Uint8Array`

Serialize the message to binary data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`BinaryWriteOptions`\> |

#### Returns

`Uint8Array`

#### Inherited from

Message.toBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:50

___

### toJSON

▸ **toJSON**(): `JsonValue`

Override for serialization behavior. This will be invoked when calling
JSON.stringify on this message (i.e. JSON.stringify(msg)).

Note that this will not serialize google.protobuf.Any with a packed
message because the protobuf JSON format specifies that it needs to be
unpacked, and this is only possible with a type registry to look up the
message type.  As a result, attempting to serialize a message with this
type will throw an Error.

This method is protected because you should not need to invoke it
directly -- instead use JSON.stringify or toJsonString for
stringified JSON.  Alternatively, if actual JSON is desired, you should
use toJson.

#### Returns

`JsonValue`

#### Inherited from

Message.toJSON

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:75

___

### toJson

▸ **toJson**(`options?`): `JsonValue`

Serialize the message to a JSON value, a JavaScript value that can be
passed to JSON.stringify().

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`JsonWriteOptions`\> |

#### Returns

`JsonValue`

#### Inherited from

Message.toJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:55

___

### toJsonString

▸ **toJsonString**(`options?`): `string`

Serialize the message to a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`JsonWriteStringOptions`\> |

#### Returns

`string`

#### Inherited from

Message.toJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:59

___

### equals

▸ **equals**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `undefined` \| [`UsersServiceCountReq`](UsersServiceCountReq.md) \| `PlainMessage`\<[`UsersServiceCountReq`](UsersServiceCountReq.md)\> |
| `b` | `undefined` \| [`UsersServiceCountReq`](UsersServiceCountReq.md) \| `PlainMessage`\<[`UsersServiceCountReq`](UsersServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/users.scailo_pb.ts:1828

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`UsersServiceCountReq`](UsersServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`UsersServiceCountReq`](UsersServiceCountReq.md)

#### Defined in

src/users.scailo_pb.ts:1816

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`UsersServiceCountReq`](UsersServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`UsersServiceCountReq`](UsersServiceCountReq.md)

#### Defined in

src/users.scailo_pb.ts:1820

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`UsersServiceCountReq`](UsersServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`UsersServiceCountReq`](UsersServiceCountReq.md)

#### Defined in

src/users.scailo_pb.ts:1824
