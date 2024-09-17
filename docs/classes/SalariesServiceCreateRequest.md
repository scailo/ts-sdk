[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalariesServiceCreateRequest

# Class: SalariesServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Scailo.SalariesServiceCreateRequest

## Hierarchy

- `Message`\<[`SalariesServiceCreateRequest`](SalariesServiceCreateRequest.md)\>

  ↳ **`SalariesServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](SalariesServiceCreateRequest.md#constructor)

### Properties

- [applicableAttendanceRecordsCount](SalariesServiceCreateRequest.md#applicableattendancerecordscount)
- [applicableAttendanceUomId](SalariesServiceCreateRequest.md#applicableattendanceuomid)
- [bankAccountId](SalariesServiceCreateRequest.md#bankaccountid)
- [basicPayAmount](SalariesServiceCreateRequest.md#basicpayamount)
- [basicPayUomId](SalariesServiceCreateRequest.md#basicpayuomid)
- [cfFromAttendanceUomIdToBasicPayUomIdDenominator](SalariesServiceCreateRequest.md#cffromattendanceuomidtobasicpayuomiddenominator)
- [cfFromAttendanceUomIdToBasicPayUomIdNumerator](SalariesServiceCreateRequest.md#cffromattendanceuomidtobasicpayuomidnumerator)
- [currencyId](SalariesServiceCreateRequest.md#currencyid)
- [description](SalariesServiceCreateRequest.md#description)
- [employeeId](SalariesServiceCreateRequest.md#employeeid)
- [entityUuid](SalariesServiceCreateRequest.md#entityuuid)
- [formData](SalariesServiceCreateRequest.md#formdata)
- [fromDate](SalariesServiceCreateRequest.md#fromdate)
- [payrollGroupId](SalariesServiceCreateRequest.md#payrollgroupid)
- [referenceId](SalariesServiceCreateRequest.md#referenceid)
- [roundOff](SalariesServiceCreateRequest.md#roundoff)
- [taxGroupId](SalariesServiceCreateRequest.md#taxgroupid)
- [toDate](SalariesServiceCreateRequest.md#todate)
- [userComment](SalariesServiceCreateRequest.md#usercomment)
- [vaultFolderId](SalariesServiceCreateRequest.md#vaultfolderid)
- [fields](SalariesServiceCreateRequest.md#fields)
- [runtime](SalariesServiceCreateRequest.md#runtime)
- [typeName](SalariesServiceCreateRequest.md#typename)

### Methods

- [clone](SalariesServiceCreateRequest.md#clone)
- [equals](SalariesServiceCreateRequest.md#equals)
- [fromBinary](SalariesServiceCreateRequest.md#frombinary)
- [fromJson](SalariesServiceCreateRequest.md#fromjson)
- [fromJsonString](SalariesServiceCreateRequest.md#fromjsonstring)
- [getType](SalariesServiceCreateRequest.md#gettype)
- [toBinary](SalariesServiceCreateRequest.md#tobinary)
- [toJSON](SalariesServiceCreateRequest.md#tojson)
- [toJson](SalariesServiceCreateRequest.md#tojson-1)
- [toJsonString](SalariesServiceCreateRequest.md#tojsonstring)
- [equals](SalariesServiceCreateRequest.md#equals-1)
- [fromBinary](SalariesServiceCreateRequest.md#frombinary-1)
- [fromJson](SalariesServiceCreateRequest.md#fromjson-1)
- [fromJsonString](SalariesServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalariesServiceCreateRequest**(`data?`): [`SalariesServiceCreateRequest`](SalariesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalariesServiceCreateRequest`](SalariesServiceCreateRequest.md)\> |

#### Returns

[`SalariesServiceCreateRequest`](SalariesServiceCreateRequest.md)

#### Overrides

Message\&lt;SalariesServiceCreateRequest\&gt;.constructor

#### Defined in

src/salaries.scailo_pb.ts:281

## Properties

### applicableAttendanceRecordsCount

• **applicableAttendanceRecordsCount**: `bigint` = `protoInt64.zero`

The number of attendance records being considered

**`Generated`**

from field: int64 applicable_attendance_records_count = 19;

#### Defined in

src/salaries.scailo_pb.ts:223

___

### applicableAttendanceUomId

• **applicableAttendanceUomId**: `bigint` = `protoInt64.zero`

The unit of attendance

**`Generated`**

from field: int64 applicable_attendance_uom_id = 20;

#### Defined in

src/salaries.scailo_pb.ts:230

___

### bankAccountId

• **bankAccountId**: `bigint` = `protoInt64.zero`

The ID of the bank account (belonging to the organization) from which the salary will be debited

**`Generated`**

from field: int64 bank_account_id = 15;

#### Defined in

src/salaries.scailo_pb.ts:195

___

### basicPayAmount

• **basicPayAmount**: `bigint` = `protoInt64.zero`

The basic pay amount

**`Generated`**

from field: int64 basic_pay_amount = 17;

#### Defined in

src/salaries.scailo_pb.ts:209

___

### basicPayUomId

• **basicPayUomId**: `bigint` = `protoInt64.zero`

The unit of the basic pay

**`Generated`**

from field: int64 basic_pay_uom_id = 18;

#### Defined in

src/salaries.scailo_pb.ts:216

___

### cfFromAttendanceUomIdToBasicPayUomIdDenominator

• **cfFromAttendanceUomIdToBasicPayUomIdDenominator**: `bigint` = `protoInt64.zero`

The denominator for the conversion factor from attendance unit to basic pay unit

**`Generated`**

from field: int64 cf_from_attendance_uom_id_to_basic_pay_uom_id_denominator = 22;

#### Defined in

src/salaries.scailo_pb.ts:244

___

### cfFromAttendanceUomIdToBasicPayUomIdNumerator

• **cfFromAttendanceUomIdToBasicPayUomIdNumerator**: `bigint` = `protoInt64.zero`

The numerator for the conversion factor from attendance unit to basic pay unit

**`Generated`**

from field: int64 cf_from_attendance_uom_id_to_basic_pay_uom_id_numerator = 21;

#### Defined in

src/salaries.scailo_pb.ts:237

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The ID of the associated currency

**`Generated`**

from field: int64 currency_id = 16;

#### Defined in

src/salaries.scailo_pb.ts:202

___

### description

• **description**: `string` = `""`

Any additional description

**`Generated`**

from field: string description = 25;

#### Defined in

src/salaries.scailo_pb.ts:265

___

### employeeId

• **employeeId**: `bigint` = `protoInt64.zero`

The ID of the associated employee

**`Generated`**

from field: int64 employee_id = 12;

#### Defined in

src/salaries.scailo_pb.ts:174

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/salaries.scailo_pb.ts:146

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 50;

#### Defined in

src/salaries.scailo_pb.ts:279

___

### fromDate

• **fromDate**: `string` = `""`

The date from which the salary is being calculated

**`Generated`**

from field: string from_date = 13;

#### Defined in

src/salaries.scailo_pb.ts:181

___

### payrollGroupId

• **payrollGroupId**: `bigint` = `protoInt64.zero`

The ID of the associated payroll group

**`Generated`**

from field: int64 payroll_group_id = 23;

#### Defined in

src/salaries.scailo_pb.ts:251

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the salary

**`Generated`**

from field: string reference_id = 10;

#### Defined in

src/salaries.scailo_pb.ts:167

___

### roundOff

• **roundOff**: `bigint` = `protoInt64.zero`

Stores any roundoff amount

**`Generated`**

from field: int64 round_off = 30;

#### Defined in

src/salaries.scailo_pb.ts:272

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

The ID of the associated tax group

**`Generated`**

from field: int64 tax_group_id = 24;

#### Defined in

src/salaries.scailo_pb.ts:258

___

### toDate

• **toDate**: `string` = `""`

The date until which the salary is being calculated

**`Generated`**

from field: string to_date = 14;

#### Defined in

src/salaries.scailo_pb.ts:188

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

src/salaries.scailo_pb.ts:153

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: int64 vault_folder_id = 9;

#### Defined in

src/salaries.scailo_pb.ts:160

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/salaries.scailo_pb.ts:288

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/salaries.scailo_pb.ts:286

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalariesServiceCreateRequest"``

#### Defined in

src/salaries.scailo_pb.ts:287

## Methods

### clone

▸ **clone**(): [`SalariesServiceCreateRequest`](SalariesServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`SalariesServiceCreateRequest`](SalariesServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SalariesServiceCreateRequest`](SalariesServiceCreateRequest.md) \| `PlainMessage`\<[`SalariesServiceCreateRequest`](SalariesServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalariesServiceCreateRequest`](SalariesServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalariesServiceCreateRequest`](SalariesServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`SalariesServiceCreateRequest`](SalariesServiceCreateRequest.md) \| `PlainMessage`\<[`SalariesServiceCreateRequest`](SalariesServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`SalariesServiceCreateRequest`](SalariesServiceCreateRequest.md) \| `PlainMessage`\<[`SalariesServiceCreateRequest`](SalariesServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/salaries.scailo_pb.ts:323

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalariesServiceCreateRequest`](SalariesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalariesServiceCreateRequest`](SalariesServiceCreateRequest.md)

#### Defined in

src/salaries.scailo_pb.ts:311

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalariesServiceCreateRequest`](SalariesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalariesServiceCreateRequest`](SalariesServiceCreateRequest.md)

#### Defined in

src/salaries.scailo_pb.ts:315

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalariesServiceCreateRequest`](SalariesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalariesServiceCreateRequest`](SalariesServiceCreateRequest.md)

#### Defined in

src/salaries.scailo_pb.ts:319
