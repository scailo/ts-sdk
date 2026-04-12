[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalariesServiceUpdateRequest

# Class: SalariesServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Scailo.SalariesServiceUpdateRequest

## Hierarchy

- `Message`\<[`SalariesServiceUpdateRequest`](SalariesServiceUpdateRequest.md)\>

  ↳ **`SalariesServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](SalariesServiceUpdateRequest.md#constructor)

### Properties

- [applicableAttendanceRecordsCount](SalariesServiceUpdateRequest.md#applicableattendancerecordscount)
- [applicableAttendanceUomId](SalariesServiceUpdateRequest.md#applicableattendanceuomid)
- [bankAccountId](SalariesServiceUpdateRequest.md#bankaccountid)
- [basicPayAmount](SalariesServiceUpdateRequest.md#basicpayamount)
- [basicPayUomId](SalariesServiceUpdateRequest.md#basicpayuomid)
- [cfFromAttendanceUomIdToBasicPayUomIdDenominator](SalariesServiceUpdateRequest.md#cffromattendanceuomidtobasicpayuomiddenominator)
- [cfFromAttendanceUomIdToBasicPayUomIdNumerator](SalariesServiceUpdateRequest.md#cffromattendanceuomidtobasicpayuomidnumerator)
- [currencyId](SalariesServiceUpdateRequest.md#currencyid)
- [description](SalariesServiceUpdateRequest.md#description)
- [formData](SalariesServiceUpdateRequest.md#formdata)
- [fromDate](SalariesServiceUpdateRequest.md#fromdate)
- [id](SalariesServiceUpdateRequest.md#id)
- [notifyUsers](SalariesServiceUpdateRequest.md#notifyusers)
- [payrollGroupId](SalariesServiceUpdateRequest.md#payrollgroupid)
- [referenceId](SalariesServiceUpdateRequest.md#referenceid)
- [roundOff](SalariesServiceUpdateRequest.md#roundoff)
- [taxGroupId](SalariesServiceUpdateRequest.md#taxgroupid)
- [toDate](SalariesServiceUpdateRequest.md#todate)
- [userComment](SalariesServiceUpdateRequest.md#usercomment)
- [vaultFolderId](SalariesServiceUpdateRequest.md#vaultfolderid)
- [fields](SalariesServiceUpdateRequest.md#fields)
- [runtime](SalariesServiceUpdateRequest.md#runtime)
- [typeName](SalariesServiceUpdateRequest.md#typename)

### Methods

- [clone](SalariesServiceUpdateRequest.md#clone)
- [equals](SalariesServiceUpdateRequest.md#equals)
- [fromBinary](SalariesServiceUpdateRequest.md#frombinary)
- [fromJson](SalariesServiceUpdateRequest.md#fromjson)
- [fromJsonString](SalariesServiceUpdateRequest.md#fromjsonstring)
- [getType](SalariesServiceUpdateRequest.md#gettype)
- [toBinary](SalariesServiceUpdateRequest.md#tobinary)
- [toJSON](SalariesServiceUpdateRequest.md#tojson)
- [toJson](SalariesServiceUpdateRequest.md#tojson-1)
- [toJsonString](SalariesServiceUpdateRequest.md#tojsonstring)
- [equals](SalariesServiceUpdateRequest.md#equals-1)
- [fromBinary](SalariesServiceUpdateRequest.md#frombinary-1)
- [fromJson](SalariesServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](SalariesServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalariesServiceUpdateRequest**(`data?`): [`SalariesServiceUpdateRequest`](SalariesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalariesServiceUpdateRequest`](SalariesServiceUpdateRequest.md)\> |

#### Returns

[`SalariesServiceUpdateRequest`](SalariesServiceUpdateRequest.md)

#### Overrides

Message\&lt;SalariesServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/salaries.scailo_pb.ts:507](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/salaries.scailo_pb.ts#L507)

## Properties

### applicableAttendanceRecordsCount

• **applicableAttendanceRecordsCount**: `bigint` = `protoInt64.zero`

The number of attendance records being considered

**`Generated`**

from field: int64 applicable_attendance_records_count = 19;

#### Defined in

[src/salaries.scailo_pb.ts:449](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/salaries.scailo_pb.ts#L449)

___

### applicableAttendanceUomId

• **applicableAttendanceUomId**: `bigint` = `protoInt64.zero`

The unit of attendance

**`Generated`**

from field: int64 applicable_attendance_uom_id = 20;

#### Defined in

[src/salaries.scailo_pb.ts:456](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/salaries.scailo_pb.ts#L456)

___

### bankAccountId

• **bankAccountId**: `bigint` = `protoInt64.zero`

The ID of the bank account (belonging to the organization) from which the salary will be debited

**`Generated`**

from field: int64 bank_account_id = 15;

#### Defined in

[src/salaries.scailo_pb.ts:421](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/salaries.scailo_pb.ts#L421)

___

### basicPayAmount

• **basicPayAmount**: `bigint` = `protoInt64.zero`

The basic pay amount

**`Generated`**

from field: int64 basic_pay_amount = 17;

#### Defined in

[src/salaries.scailo_pb.ts:435](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/salaries.scailo_pb.ts#L435)

___

### basicPayUomId

• **basicPayUomId**: `bigint` = `protoInt64.zero`

The unit of the basic pay

**`Generated`**

from field: int64 basic_pay_uom_id = 18;

#### Defined in

[src/salaries.scailo_pb.ts:442](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/salaries.scailo_pb.ts#L442)

___

### cfFromAttendanceUomIdToBasicPayUomIdDenominator

• **cfFromAttendanceUomIdToBasicPayUomIdDenominator**: `bigint` = `protoInt64.zero`

The denominator for the conversion factor from attendance unit to basic pay unit

**`Generated`**

from field: int64 cf_from_attendance_uom_id_to_basic_pay_uom_id_denominator = 22;

#### Defined in

[src/salaries.scailo_pb.ts:470](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/salaries.scailo_pb.ts#L470)

___

### cfFromAttendanceUomIdToBasicPayUomIdNumerator

• **cfFromAttendanceUomIdToBasicPayUomIdNumerator**: `bigint` = `protoInt64.zero`

The numerator for the conversion factor from attendance unit to basic pay unit

**`Generated`**

from field: int64 cf_from_attendance_uom_id_to_basic_pay_uom_id_numerator = 21;

#### Defined in

[src/salaries.scailo_pb.ts:463](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/salaries.scailo_pb.ts#L463)

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The ID of the associated currency

**`Generated`**

from field: int64 currency_id = 16;

#### Defined in

[src/salaries.scailo_pb.ts:428](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/salaries.scailo_pb.ts#L428)

___

### description

• **description**: `string` = `""`

Any additional description

**`Generated`**

from field: string description = 25;

#### Defined in

[src/salaries.scailo_pb.ts:491](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/salaries.scailo_pb.ts#L491)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 50;

#### Defined in

[src/salaries.scailo_pb.ts:505](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/salaries.scailo_pb.ts#L505)

___

### fromDate

• **fromDate**: `string` = `""`

The date from which the salary is being calculated

**`Generated`**

from field: string from_date = 13;

#### Defined in

[src/salaries.scailo_pb.ts:407](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/salaries.scailo_pb.ts#L407)

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/salaries.scailo_pb.ts:365](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/salaries.scailo_pb.ts#L365)

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

**`Optional`**

**`Description`**

Flag to trigger system notifications to relevant users upon update. Set to true if subsequent workflows (like verification) depend on this change.

**`Example`**

```ts
true
```

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

[src/salaries.scailo_pb.ts:377](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/salaries.scailo_pb.ts#L377)

___

### payrollGroupId

• **payrollGroupId**: `bigint` = `protoInt64.zero`

The ID of the associated payroll group

**`Generated`**

from field: int64 payroll_group_id = 23;

#### Defined in

[src/salaries.scailo_pb.ts:477](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/salaries.scailo_pb.ts#L477)

___

### referenceId

• **referenceId**: `string` = `""`

**`Mandatory`**

**`Description`**

Updated alphanumeric reference ID. Must contain at least 1 character.

**`Example`**

```ts
"ABS-2023-001-REV"
```

**`Regex`**

"[0-9A-Za-z ]+$"

**`Format`**

Alphanumeric characters and spaces only. No special symbols or punctuation allowed.

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/salaries.scailo_pb.ts:400](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/salaries.scailo_pb.ts#L400)

___

### roundOff

• **roundOff**: `bigint` = `protoInt64.zero`

Stores any roundoff amount

**`Generated`**

from field: int64 round_off = 30;

#### Defined in

[src/salaries.scailo_pb.ts:498](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/salaries.scailo_pb.ts#L498)

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

The ID of the associated tax group

**`Generated`**

from field: int64 tax_group_id = 24;

#### Defined in

[src/salaries.scailo_pb.ts:484](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/salaries.scailo_pb.ts#L484)

___

### toDate

• **toDate**: `string` = `""`

The date until which the salary is being calculated

**`Generated`**

from field: string to_date = 14;

#### Defined in

[src/salaries.scailo_pb.ts:414](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/salaries.scailo_pb.ts#L414)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/salaries.scailo_pb.ts:358](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/salaries.scailo_pb.ts#L358)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: int64 vault_folder_id = 9;

#### Defined in

[src/salaries.scailo_pb.ts:384](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/salaries.scailo_pb.ts#L384)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/salaries.scailo_pb.ts:514](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/salaries.scailo_pb.ts#L514)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/salaries.scailo_pb.ts:512](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/salaries.scailo_pb.ts#L512)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalariesServiceUpdateRequest"``

#### Defined in

[src/salaries.scailo_pb.ts:513](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/salaries.scailo_pb.ts#L513)

## Methods

### clone

▸ **clone**(): [`SalariesServiceUpdateRequest`](SalariesServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`SalariesServiceUpdateRequest`](SalariesServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SalariesServiceUpdateRequest`](SalariesServiceUpdateRequest.md) \| `PlainMessage`\<[`SalariesServiceUpdateRequest`](SalariesServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalariesServiceUpdateRequest`](SalariesServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalariesServiceUpdateRequest`](SalariesServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`SalariesServiceUpdateRequest`](SalariesServiceUpdateRequest.md) \| `PlainMessage`\<[`SalariesServiceUpdateRequest`](SalariesServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`SalariesServiceUpdateRequest`](SalariesServiceUpdateRequest.md) \| `PlainMessage`\<[`SalariesServiceUpdateRequest`](SalariesServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/salaries.scailo_pb.ts:549](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/salaries.scailo_pb.ts#L549)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalariesServiceUpdateRequest`](SalariesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalariesServiceUpdateRequest`](SalariesServiceUpdateRequest.md)

#### Defined in

[src/salaries.scailo_pb.ts:537](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/salaries.scailo_pb.ts#L537)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalariesServiceUpdateRequest`](SalariesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalariesServiceUpdateRequest`](SalariesServiceUpdateRequest.md)

#### Defined in

[src/salaries.scailo_pb.ts:541](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/salaries.scailo_pb.ts#L541)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalariesServiceUpdateRequest`](SalariesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalariesServiceUpdateRequest`](SalariesServiceUpdateRequest.md)

#### Defined in

[src/salaries.scailo_pb.ts:545](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/salaries.scailo_pb.ts#L545)
