[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / UsersServiceFilterReq

# Class: UsersServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.UsersServiceFilterReq

## Hierarchy

- `Message`\<[`UsersServiceFilterReq`](UsersServiceFilterReq.md)\>

  ↳ **`UsersServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](UsersServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](UsersServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](UsersServiceFilterReq.md#approvedonend)
- [approvedOnStart](UsersServiceFilterReq.md#approvedonstart)
- [approverRoleId](UsersServiceFilterReq.md#approverroleid)
- [attendanceUomId](UsersServiceFilterReq.md#attendanceuomid)
- [basicPayUomId](UsersServiceFilterReq.md#basicpayuomid)
- [code](UsersServiceFilterReq.md#code)
- [count](UsersServiceFilterReq.md#count)
- [creationTimestampEnd](UsersServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](UsersServiceFilterReq.md#creationtimestampstart)
- [departmentId](UsersServiceFilterReq.md#departmentid)
- [email](UsersServiceFilterReq.md#email)
- [entityUuid](UsersServiceFilterReq.md#entityuuid)
- [isActive](UsersServiceFilterReq.md#isactive)
- [modificationTimestampEnd](UsersServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](UsersServiceFilterReq.md#modificationtimestampstart)
- [name](UsersServiceFilterReq.md#name)
- [offset](UsersServiceFilterReq.md#offset)
- [payrollCurrencyId](UsersServiceFilterReq.md#payrollcurrencyid)
- [payrollGroupId](UsersServiceFilterReq.md#payrollgroupid)
- [payrollTaxGroupId](UsersServiceFilterReq.md#payrolltaxgroupid)
- [phone](UsersServiceFilterReq.md#phone)
- [roleId](UsersServiceFilterReq.md#roleid)
- [shiftGroupId](UsersServiceFilterReq.md#shiftgroupid)
- [sortKey](UsersServiceFilterReq.md#sortkey)
- [sortOrder](UsersServiceFilterReq.md#sortorder)
- [status](UsersServiceFilterReq.md#status)
- [userType](UsersServiceFilterReq.md#usertype)
- [username](UsersServiceFilterReq.md#username)
- [workEmail](UsersServiceFilterReq.md#workemail)
- [fields](UsersServiceFilterReq.md#fields)
- [runtime](UsersServiceFilterReq.md#runtime)
- [typeName](UsersServiceFilterReq.md#typename)

### Methods

- [clone](UsersServiceFilterReq.md#clone)
- [equals](UsersServiceFilterReq.md#equals)
- [fromBinary](UsersServiceFilterReq.md#frombinary)
- [fromJson](UsersServiceFilterReq.md#fromjson)
- [fromJsonString](UsersServiceFilterReq.md#fromjsonstring)
- [getType](UsersServiceFilterReq.md#gettype)
- [toBinary](UsersServiceFilterReq.md#tobinary)
- [toJSON](UsersServiceFilterReq.md#tojson)
- [toJson](UsersServiceFilterReq.md#tojson-1)
- [toJsonString](UsersServiceFilterReq.md#tojsonstring)
- [equals](UsersServiceFilterReq.md#equals-1)
- [fromBinary](UsersServiceFilterReq.md#frombinary-1)
- [fromJson](UsersServiceFilterReq.md#fromjson-1)
- [fromJsonString](UsersServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new UsersServiceFilterReq**(`data?`): [`UsersServiceFilterReq`](UsersServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`UsersServiceFilterReq`](UsersServiceFilterReq.md)\> |

#### Returns

[`UsersServiceFilterReq`](UsersServiceFilterReq.md)

#### Overrides

Message\&lt;UsersServiceFilterReq\&gt;.constructor

#### Defined in

src/users.scailo_pb.ts:1496

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

src/users.scailo_pb.ts:1389

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

src/users.scailo_pb.ts:1382

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

src/users.scailo_pb.ts:1375

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

src/users.scailo_pb.ts:1396

___

### attendanceUomId

• **attendanceUomId**: `bigint` = `protoInt64.zero`

The associated unit of material of the user's attendance record

**`Generated`**

from field: uint64 attendance_uom_id = 27;

#### Defined in

src/users.scailo_pb.ts:1452

___

### basicPayUomId

• **basicPayUomId**: `bigint` = `protoInt64.zero`

The associated unit of material for storing the basic pay amount

**`Generated`**

from field: uint64 basic_pay_uom_id = 32;

#### Defined in

src/users.scailo_pb.ts:1487

___

### code

• **code**: `string` = `""`

The unique code by which the user is classified

**`Generated`**

from field: string code = 22;

#### Defined in

src/users.scailo_pb.ts:1417

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/users.scailo_pb.ts:1298

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/users.scailo_pb.ts:1333

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/users.scailo_pb.ts:1326

___

### departmentId

• **departmentId**: `bigint` = `protoInt64.zero`

The associated department

**`Generated`**

from field: uint64 department_id = 28;

#### Defined in

src/users.scailo_pb.ts:1459

___

### email

• **email**: `string` = `""`

The primary email of the user

**`Generated`**

from field: string email = 23;

#### Defined in

src/users.scailo_pb.ts:1424

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/users.scailo_pb.ts:1361

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/users.scailo_pb.ts:1291

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/users.scailo_pb.ts:1347

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/users.scailo_pb.ts:1340

___

### name

• **name**: `string` = `""`

The name of the user

**`Generated`**

from field: string name = 21;

#### Defined in

src/users.scailo_pb.ts:1410

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/users.scailo_pb.ts:1305

___

### payrollCurrencyId

• **payrollCurrencyId**: `bigint` = `protoInt64.zero`

The associated currency ID of the user's payroll

**`Generated`**

from field: uint64 payroll_currency_id = 31;

#### Defined in

src/users.scailo_pb.ts:1480

___

### payrollGroupId

• **payrollGroupId**: `bigint` = `protoInt64.zero`

The associated payroll group ID of the user

**`Generated`**

from field: uint64 payroll_group_id = 29;

#### Defined in

src/users.scailo_pb.ts:1466

___

### payrollTaxGroupId

• **payrollTaxGroupId**: `bigint` = `protoInt64.zero`

The associated tax group ID using which the user's payroll needs to be calculated

**`Generated`**

from field: uint64 payroll_tax_group_id = 30;

#### Defined in

src/users.scailo_pb.ts:1473

___

### phone

• **phone**: `string` = `""`

The primary contact number of the user

**`Generated`**

from field: string phone = 24;

#### Defined in

src/users.scailo_pb.ts:1431

___

### roleId

• **roleId**: `bigint` = `protoInt64.zero`

The associated role ID

**`Generated`**

from field: uint64 role_id = 25;

#### Defined in

src/users.scailo_pb.ts:1438

___

### shiftGroupId

• **shiftGroupId**: `bigint` = `protoInt64.zero`

The associated shift group ID

**`Generated`**

from field: uint64 shift_group_id = 26;

#### Defined in

src/users.scailo_pb.ts:1445

___

### sortKey

• **sortKey**: [`USER_SORT_KEY`](../enums/USER_SORT_KEY.md) = `USER_SORT_KEY.USER_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.USER_SORT_KEY sort_key = 5;

#### Defined in

src/users.scailo_pb.ts:1319

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/users.scailo_pb.ts:1312

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this user

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/users.scailo_pb.ts:1368

___

### userType

• **userType**: [`USER_TYPE`](../enums/USER_TYPE.md) = `USER_TYPE.USER_TYPE_ANY_UNSPECIFIED`

Stores the user type

**`Generated`**

from field: Scailo.USER_TYPE user_type = 7;

#### Defined in

src/users.scailo_pb.ts:1354

___

### username

• **username**: `string` = `""`

The username of the user

**`Generated`**

from field: string username = 20;

#### Defined in

src/users.scailo_pb.ts:1403

___

### workEmail

• **workEmail**: `string` = `""`

The optional work email of the user

**`Generated`**

from field: string work_email = 33;

#### Defined in

src/users.scailo_pb.ts:1494

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/users.scailo_pb.ts:1503

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/users.scailo_pb.ts:1501

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.UsersServiceFilterReq"``

#### Defined in

src/users.scailo_pb.ts:1502

## Methods

### clone

▸ **clone**(): [`UsersServiceFilterReq`](UsersServiceFilterReq.md)

Create a deep copy.

#### Returns

[`UsersServiceFilterReq`](UsersServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`UsersServiceFilterReq`](UsersServiceFilterReq.md) \| `PlainMessage`\<[`UsersServiceFilterReq`](UsersServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`UsersServiceFilterReq`](UsersServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`UsersServiceFilterReq`](UsersServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`UsersServiceFilterReq`](UsersServiceFilterReq.md) \| `PlainMessage`\<[`UsersServiceFilterReq`](UsersServiceFilterReq.md)\> |
| `b` | `undefined` \| [`UsersServiceFilterReq`](UsersServiceFilterReq.md) \| `PlainMessage`\<[`UsersServiceFilterReq`](UsersServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/users.scailo_pb.ts:1548

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`UsersServiceFilterReq`](UsersServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`UsersServiceFilterReq`](UsersServiceFilterReq.md)

#### Defined in

src/users.scailo_pb.ts:1536

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`UsersServiceFilterReq`](UsersServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`UsersServiceFilterReq`](UsersServiceFilterReq.md)

#### Defined in

src/users.scailo_pb.ts:1540

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`UsersServiceFilterReq`](UsersServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`UsersServiceFilterReq`](UsersServiceFilterReq.md)

#### Defined in

src/users.scailo_pb.ts:1544
