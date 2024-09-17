[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PayrollGroupsServiceItemUpdateRequest

# Class: PayrollGroupsServiceItemUpdateRequest

Describes the parameters required to update a param in a payroll group

**`Generated`**

from message Scailo.PayrollGroupsServiceItemUpdateRequest

## Hierarchy

- `Message`\<[`PayrollGroupsServiceItemUpdateRequest`](PayrollGroupsServiceItemUpdateRequest.md)\>

  ↳ **`PayrollGroupsServiceItemUpdateRequest`**

## Table of contents

### Constructors

- [constructor](PayrollGroupsServiceItemUpdateRequest.md#constructor)

### Properties

- [amountPercentageOnWhichTaxApplicable](PayrollGroupsServiceItemUpdateRequest.md#amountpercentageonwhichtaxapplicable)
- [basePayAddition](PayrollGroupsServiceItemUpdateRequest.md#basepayaddition)
- [description](PayrollGroupsServiceItemUpdateRequest.md#description)
- [divisor](PayrollGroupsServiceItemUpdateRequest.md#divisor)
- [id](PayrollGroupsServiceItemUpdateRequest.md#id)
- [maxAmount](PayrollGroupsServiceItemUpdateRequest.md#maxamount)
- [minAmount](PayrollGroupsServiceItemUpdateRequest.md#minamount)
- [userComment](PayrollGroupsServiceItemUpdateRequest.md#usercomment)
- [valueType](PayrollGroupsServiceItemUpdateRequest.md#valuetype)
- [fields](PayrollGroupsServiceItemUpdateRequest.md#fields)
- [runtime](PayrollGroupsServiceItemUpdateRequest.md#runtime)
- [typeName](PayrollGroupsServiceItemUpdateRequest.md#typename)

### Methods

- [clone](PayrollGroupsServiceItemUpdateRequest.md#clone)
- [equals](PayrollGroupsServiceItemUpdateRequest.md#equals)
- [fromBinary](PayrollGroupsServiceItemUpdateRequest.md#frombinary)
- [fromJson](PayrollGroupsServiceItemUpdateRequest.md#fromjson)
- [fromJsonString](PayrollGroupsServiceItemUpdateRequest.md#fromjsonstring)
- [getType](PayrollGroupsServiceItemUpdateRequest.md#gettype)
- [toBinary](PayrollGroupsServiceItemUpdateRequest.md#tobinary)
- [toJSON](PayrollGroupsServiceItemUpdateRequest.md#tojson)
- [toJson](PayrollGroupsServiceItemUpdateRequest.md#tojson-1)
- [toJsonString](PayrollGroupsServiceItemUpdateRequest.md#tojsonstring)
- [equals](PayrollGroupsServiceItemUpdateRequest.md#equals-1)
- [fromBinary](PayrollGroupsServiceItemUpdateRequest.md#frombinary-1)
- [fromJson](PayrollGroupsServiceItemUpdateRequest.md#fromjson-1)
- [fromJsonString](PayrollGroupsServiceItemUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new PayrollGroupsServiceItemUpdateRequest**(`data?`): [`PayrollGroupsServiceItemUpdateRequest`](PayrollGroupsServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PayrollGroupsServiceItemUpdateRequest`](PayrollGroupsServiceItemUpdateRequest.md)\> |

#### Returns

[`PayrollGroupsServiceItemUpdateRequest`](PayrollGroupsServiceItemUpdateRequest.md)

#### Overrides

Message\&lt;PayrollGroupsServiceItemUpdateRequest\&gt;.constructor

#### Defined in

src/payroll_groups.scailo_pb.ts:574

## Properties

### amountPercentageOnWhichTaxApplicable

• **amountPercentageOnWhichTaxApplicable**: `bigint` = `protoInt64.zero`

Stores the amount (in terms of percentage) on which any associated payroll tax is applicable

**`Generated`**

from field: uint64 amount_percentage_on_which_tax_applicable = 25;

#### Defined in

src/payroll_groups.scailo_pb.ts:565

___

### basePayAddition

• **basePayAddition**: `bigint` = `protoInt64.zero`

Stores the base pay addition amount in terms of value_type (if value_type is percentage, then base_pay determines the percentage)

**`Generated`**

from field: uint64 base_pay_addition = 21;

#### Defined in

src/payroll_groups.scailo_pb.ts:537

___

### description

• **description**: `string` = `""`

An optional description

**`Generated`**

from field: string description = 40;

#### Defined in

src/payroll_groups.scailo_pb.ts:572

___

### divisor

• **divisor**: `bigint` = `protoInt64.zero`

Stores the divisor with which the base_pay_addition needs to be divided by, in order to get the actual base pay value

**`Generated`**

from field: uint64 divisor = 22;

#### Defined in

src/payroll_groups.scailo_pb.ts:544

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record

**`Generated`**

from field: uint64 id = 2;

#### Defined in

src/payroll_groups.scailo_pb.ts:523

___

### maxAmount

• **maxAmount**: `bigint` = `protoInt64.zero`

The maximum amount of applicable tax (will be disregarded if value is -100)

**`Generated`**

from field: int64 max_amount = 24;

#### Defined in

src/payroll_groups.scailo_pb.ts:558

___

### minAmount

• **minAmount**: `bigint` = `protoInt64.zero`

The minimum amount of applicable tax (will be disregarded if value is -100)

**`Generated`**

from field: int64 min_amount = 23;

#### Defined in

src/payroll_groups.scailo_pb.ts:551

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/payroll_groups.scailo_pb.ts:516

___

### valueType

• **valueType**: [`PAYROLL_GROUP_ITEM_VALUE_TYPE`](../enums/PAYROLL_GROUP_ITEM_VALUE_TYPE.md) = `PAYROLL_GROUP_ITEM_VALUE_TYPE.PAYROLL_GROUP_ITEM_VALUE_TYPE_ANY_UNSPECIFIED`

The value type of the item

**`Generated`**

from field: Scailo.PAYROLL_GROUP_ITEM_VALUE_TYPE value_type = 20;

#### Defined in

src/payroll_groups.scailo_pb.ts:530

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/payroll_groups.scailo_pb.ts:581

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/payroll_groups.scailo_pb.ts:579

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PayrollGroupsServiceItemUpdateRequest"``

#### Defined in

src/payroll_groups.scailo_pb.ts:580

## Methods

### clone

▸ **clone**(): [`PayrollGroupsServiceItemUpdateRequest`](PayrollGroupsServiceItemUpdateRequest.md)

Create a deep copy.

#### Returns

[`PayrollGroupsServiceItemUpdateRequest`](PayrollGroupsServiceItemUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`PayrollGroupsServiceItemUpdateRequest`](PayrollGroupsServiceItemUpdateRequest.md) \| `PlainMessage`\<[`PayrollGroupsServiceItemUpdateRequest`](PayrollGroupsServiceItemUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`PayrollGroupsServiceItemUpdateRequest`](PayrollGroupsServiceItemUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PayrollGroupsServiceItemUpdateRequest`](PayrollGroupsServiceItemUpdateRequest.md)\>

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
| `a` | `undefined` \| [`PayrollGroupsServiceItemUpdateRequest`](PayrollGroupsServiceItemUpdateRequest.md) \| `PlainMessage`\<[`PayrollGroupsServiceItemUpdateRequest`](PayrollGroupsServiceItemUpdateRequest.md)\> |
| `b` | `undefined` \| [`PayrollGroupsServiceItemUpdateRequest`](PayrollGroupsServiceItemUpdateRequest.md) \| `PlainMessage`\<[`PayrollGroupsServiceItemUpdateRequest`](PayrollGroupsServiceItemUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/payroll_groups.scailo_pb.ts:605

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PayrollGroupsServiceItemUpdateRequest`](PayrollGroupsServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PayrollGroupsServiceItemUpdateRequest`](PayrollGroupsServiceItemUpdateRequest.md)

#### Defined in

src/payroll_groups.scailo_pb.ts:593

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PayrollGroupsServiceItemUpdateRequest`](PayrollGroupsServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PayrollGroupsServiceItemUpdateRequest`](PayrollGroupsServiceItemUpdateRequest.md)

#### Defined in

src/payroll_groups.scailo_pb.ts:597

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PayrollGroupsServiceItemUpdateRequest`](PayrollGroupsServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PayrollGroupsServiceItemUpdateRequest`](PayrollGroupsServiceItemUpdateRequest.md)

#### Defined in

src/payroll_groups.scailo_pb.ts:601
