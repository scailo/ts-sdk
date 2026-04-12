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

[src/salaries.scailo_pb.ts:299](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/salaries.scailo_pb.ts#L299)

## Properties

### applicableAttendanceRecordsCount

• **applicableAttendanceRecordsCount**: `bigint` = `protoInt64.zero`

The number of attendance records being considered

**`Generated`**

from field: int64 applicable_attendance_records_count = 19;

#### Defined in

[src/salaries.scailo_pb.ts:241](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/salaries.scailo_pb.ts#L241)

___

### applicableAttendanceUomId

• **applicableAttendanceUomId**: `bigint` = `protoInt64.zero`

The unit of attendance

**`Generated`**

from field: int64 applicable_attendance_uom_id = 20;

#### Defined in

[src/salaries.scailo_pb.ts:248](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/salaries.scailo_pb.ts#L248)

___

### bankAccountId

• **bankAccountId**: `bigint` = `protoInt64.zero`

The ID of the bank account (belonging to the organization) from which the salary will be debited

**`Generated`**

from field: int64 bank_account_id = 15;

#### Defined in

[src/salaries.scailo_pb.ts:213](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/salaries.scailo_pb.ts#L213)

___

### basicPayAmount

• **basicPayAmount**: `bigint` = `protoInt64.zero`

The basic pay amount

**`Generated`**

from field: int64 basic_pay_amount = 17;

#### Defined in

[src/salaries.scailo_pb.ts:227](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/salaries.scailo_pb.ts#L227)

___

### basicPayUomId

• **basicPayUomId**: `bigint` = `protoInt64.zero`

The unit of the basic pay

**`Generated`**

from field: int64 basic_pay_uom_id = 18;

#### Defined in

[src/salaries.scailo_pb.ts:234](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/salaries.scailo_pb.ts#L234)

___

### cfFromAttendanceUomIdToBasicPayUomIdDenominator

• **cfFromAttendanceUomIdToBasicPayUomIdDenominator**: `bigint` = `protoInt64.zero`

The denominator for the conversion factor from attendance unit to basic pay unit

**`Generated`**

from field: int64 cf_from_attendance_uom_id_to_basic_pay_uom_id_denominator = 22;

#### Defined in

[src/salaries.scailo_pb.ts:262](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/salaries.scailo_pb.ts#L262)

___

### cfFromAttendanceUomIdToBasicPayUomIdNumerator

• **cfFromAttendanceUomIdToBasicPayUomIdNumerator**: `bigint` = `protoInt64.zero`

The numerator for the conversion factor from attendance unit to basic pay unit

**`Generated`**

from field: int64 cf_from_attendance_uom_id_to_basic_pay_uom_id_numerator = 21;

#### Defined in

[src/salaries.scailo_pb.ts:255](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/salaries.scailo_pb.ts#L255)

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The ID of the associated currency

**`Generated`**

from field: int64 currency_id = 16;

#### Defined in

[src/salaries.scailo_pb.ts:220](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/salaries.scailo_pb.ts#L220)

___

### description

• **description**: `string` = `""`

Any additional description

**`Generated`**

from field: string description = 25;

#### Defined in

[src/salaries.scailo_pb.ts:283](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/salaries.scailo_pb.ts#L283)

___

### employeeId

• **employeeId**: `bigint` = `protoInt64.zero`

The ID of the associated employee

**`Generated`**

from field: int64 employee_id = 12;

#### Defined in

[src/salaries.scailo_pb.ts:192](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/salaries.scailo_pb.ts#L192)

___

### entityUuid

• **entityUuid**: `string` = `""`

**`Optional`**

**`Description`**

The globally unique identifier for the Organization or Business Entity.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Regex`**

^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$

**`Format`**

If provided, must be a valid v4 UUID in canonical hyphenated form.

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/salaries.scailo_pb.ts:155](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/salaries.scailo_pb.ts#L155)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 50;

#### Defined in

[src/salaries.scailo_pb.ts:297](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/salaries.scailo_pb.ts#L297)

___

### fromDate

• **fromDate**: `string` = `""`

The date from which the salary is being calculated

**`Generated`**

from field: string from_date = 13;

#### Defined in

[src/salaries.scailo_pb.ts:199](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/salaries.scailo_pb.ts#L199)

___

### payrollGroupId

• **payrollGroupId**: `bigint` = `protoInt64.zero`

The ID of the associated payroll group

**`Generated`**

from field: int64 payroll_group_id = 23;

#### Defined in

[src/salaries.scailo_pb.ts:269](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/salaries.scailo_pb.ts#L269)

___

### referenceId

• **referenceId**: `string` = `""`

**`Mandatory`**

**`Description`**

A unique external reference ID for the record. Must be alphanumeric (spaces allowed). Used for cross-referencing with external systems.

**`Example`**

```ts
"ABS-2023-001"
```

**`Regex`**

"[0-9A-Za-z ]+$"

**`Format`**

Alphanumeric characters and spaces only. No special symbols or punctuation allowed.

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/salaries.scailo_pb.ts:185](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/salaries.scailo_pb.ts#L185)

___

### roundOff

• **roundOff**: `bigint` = `protoInt64.zero`

Stores any roundoff amount

**`Generated`**

from field: int64 round_off = 30;

#### Defined in

[src/salaries.scailo_pb.ts:290](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/salaries.scailo_pb.ts#L290)

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

The ID of the associated tax group

**`Generated`**

from field: int64 tax_group_id = 24;

#### Defined in

[src/salaries.scailo_pb.ts:276](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/salaries.scailo_pb.ts#L276)

___

### toDate

• **toDate**: `string` = `""`

The date until which the salary is being calculated

**`Generated`**

from field: string to_date = 14;

#### Defined in

[src/salaries.scailo_pb.ts:206](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/salaries.scailo_pb.ts#L206)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

[src/salaries.scailo_pb.ts:162](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/salaries.scailo_pb.ts#L162)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: int64 vault_folder_id = 9;

#### Defined in

[src/salaries.scailo_pb.ts:169](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/salaries.scailo_pb.ts#L169)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/salaries.scailo_pb.ts:306](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/salaries.scailo_pb.ts#L306)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/salaries.scailo_pb.ts:304](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/salaries.scailo_pb.ts#L304)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalariesServiceCreateRequest"``

#### Defined in

[src/salaries.scailo_pb.ts:305](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/salaries.scailo_pb.ts#L305)

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

[src/salaries.scailo_pb.ts:341](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/salaries.scailo_pb.ts#L341)

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

[src/salaries.scailo_pb.ts:329](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/salaries.scailo_pb.ts#L329)

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

[src/salaries.scailo_pb.ts:333](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/salaries.scailo_pb.ts#L333)

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

[src/salaries.scailo_pb.ts:337](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/salaries.scailo_pb.ts#L337)
