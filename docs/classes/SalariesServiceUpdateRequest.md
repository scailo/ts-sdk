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

[src/salaries.scailo_pb.ts:548](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/salaries.scailo_pb.ts#L548)

## Properties

### applicableAttendanceRecordsCount

• **applicableAttendanceRecordsCount**: `bigint` = `protoInt64.zero`

The number of attendance records being considered

**`Generated`**

from field: int64 applicable_attendance_records_count = 19;

#### Defined in

[src/salaries.scailo_pb.ts:483](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/salaries.scailo_pb.ts#L483)

___

### applicableAttendanceUomId

• **applicableAttendanceUomId**: `bigint` = `protoInt64.zero`

The unit of attendance

**`Generated`**

from field: int64 applicable_attendance_uom_id = 20;

#### Defined in

[src/salaries.scailo_pb.ts:490](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/salaries.scailo_pb.ts#L490)

___

### bankAccountId

• **bankAccountId**: `bigint` = `protoInt64.zero`

The ID of the bank account (belonging to the organization) from which the salary will be debited

**`Generated`**

from field: int64 bank_account_id = 15;

#### Defined in

[src/salaries.scailo_pb.ts:455](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/salaries.scailo_pb.ts#L455)

___

### basicPayAmount

• **basicPayAmount**: `bigint` = `protoInt64.zero`

The basic pay amount

**`Generated`**

from field: int64 basic_pay_amount = 17;

#### Defined in

[src/salaries.scailo_pb.ts:469](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/salaries.scailo_pb.ts#L469)

___

### basicPayUomId

• **basicPayUomId**: `bigint` = `protoInt64.zero`

The unit of the basic pay

**`Generated`**

from field: int64 basic_pay_uom_id = 18;

#### Defined in

[src/salaries.scailo_pb.ts:476](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/salaries.scailo_pb.ts#L476)

___

### cfFromAttendanceUomIdToBasicPayUomIdDenominator

• **cfFromAttendanceUomIdToBasicPayUomIdDenominator**: `bigint` = `protoInt64.zero`

The denominator for the conversion factor from attendance unit to basic pay unit

**`Generated`**

from field: int64 cf_from_attendance_uom_id_to_basic_pay_uom_id_denominator = 22;

#### Defined in

[src/salaries.scailo_pb.ts:504](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/salaries.scailo_pb.ts#L504)

___

### cfFromAttendanceUomIdToBasicPayUomIdNumerator

• **cfFromAttendanceUomIdToBasicPayUomIdNumerator**: `bigint` = `protoInt64.zero`

The numerator for the conversion factor from attendance unit to basic pay unit

**`Generated`**

from field: int64 cf_from_attendance_uom_id_to_basic_pay_uom_id_numerator = 21;

#### Defined in

[src/salaries.scailo_pb.ts:497](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/salaries.scailo_pb.ts#L497)

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The ID of the associated currency

**`Generated`**

from field: int64 currency_id = 16;

#### Defined in

[src/salaries.scailo_pb.ts:462](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/salaries.scailo_pb.ts#L462)

___

### description

• **description**: `string` = `""`

Any additional description

**`Generated`**

from field: string description = 25;

#### Defined in

[src/salaries.scailo_pb.ts:525](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/salaries.scailo_pb.ts#L525)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

**`Optional`**

**`Description`**

A collection of dynamic form fields for organization-specific data.

**`Example`**

```ts
[]
```

**`Format`**

An array/list of FormFieldDatumCreateRequest entries. Can be left empty if no custom attributes are needed.

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 50;

#### Defined in

[src/salaries.scailo_pb.ts:546](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/salaries.scailo_pb.ts#L546)

___

### fromDate

• **fromDate**: `string` = `""`

The date from which the salary is being calculated

**`Generated`**

from field: string from_date = 13;

#### Defined in

[src/salaries.scailo_pb.ts:441](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/salaries.scailo_pb.ts#L441)

___

### id

• **id**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the target record that needs to be updated.

**`Example`**

```ts
1024
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/salaries.scailo_pb.ts:399](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/salaries.scailo_pb.ts#L399)

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

[src/salaries.scailo_pb.ts:411](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/salaries.scailo_pb.ts#L411)

___

### payrollGroupId

• **payrollGroupId**: `bigint` = `protoInt64.zero`

The ID of the associated payroll group

**`Generated`**

from field: int64 payroll_group_id = 23;

#### Defined in

[src/salaries.scailo_pb.ts:511](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/salaries.scailo_pb.ts#L511)

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

[src/salaries.scailo_pb.ts:434](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/salaries.scailo_pb.ts#L434)

___

### roundOff

• **roundOff**: `bigint` = `protoInt64.zero`

Stores any roundoff amount

**`Generated`**

from field: int64 round_off = 30;

#### Defined in

[src/salaries.scailo_pb.ts:532](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/salaries.scailo_pb.ts#L532)

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

The ID of the associated tax group

**`Generated`**

from field: int64 tax_group_id = 24;

#### Defined in

[src/salaries.scailo_pb.ts:518](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/salaries.scailo_pb.ts#L518)

___

### toDate

• **toDate**: `string` = `""`

The date until which the salary is being calculated

**`Generated`**

from field: string to_date = 14;

#### Defined in

[src/salaries.scailo_pb.ts:448](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/salaries.scailo_pb.ts#L448)

___

### userComment

• **userComment**: `string` = `""`

**`Optional`**

**`Description`**

Audit log comment or justification for creating this record. This is stored in the record's history for compliance purposes.

**`Example`**

```ts
"This is a comment for audit purposes."
```

**`Regex`**

.*

**`Format`**

May contain any UTF-8 characters or be left empty.

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/salaries.scailo_pb.ts:383](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/salaries.scailo_pb.ts#L383)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: int64 vault_folder_id = 9;

#### Defined in

[src/salaries.scailo_pb.ts:418](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/salaries.scailo_pb.ts#L418)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/salaries.scailo_pb.ts:555](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/salaries.scailo_pb.ts#L555)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/salaries.scailo_pb.ts:553](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/salaries.scailo_pb.ts#L553)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalariesServiceUpdateRequest"``

#### Defined in

[src/salaries.scailo_pb.ts:554](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/salaries.scailo_pb.ts#L554)

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

[src/salaries.scailo_pb.ts:590](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/salaries.scailo_pb.ts#L590)

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

[src/salaries.scailo_pb.ts:578](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/salaries.scailo_pb.ts#L578)

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

[src/salaries.scailo_pb.ts:582](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/salaries.scailo_pb.ts#L582)

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

[src/salaries.scailo_pb.ts:586](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/salaries.scailo_pb.ts#L586)
