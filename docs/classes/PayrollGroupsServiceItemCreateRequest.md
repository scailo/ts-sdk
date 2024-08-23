[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / PayrollGroupsServiceItemCreateRequest

# Class: PayrollGroupsServiceItemCreateRequest

Describes the parameters required to add a param to a payroll group

**`Generated`**

from message Scailo.PayrollGroupsServiceItemCreateRequest

## Hierarchy

- `Message`\<[`PayrollGroupsServiceItemCreateRequest`](PayrollGroupsServiceItemCreateRequest.md)\>

  ↳ **`PayrollGroupsServiceItemCreateRequest`**

## Table of contents

### Constructors

- [constructor](PayrollGroupsServiceItemCreateRequest.md#constructor)

### Properties

- [amountPercentageOnWhichTaxApplicable](PayrollGroupsServiceItemCreateRequest.md#amountpercentageonwhichtaxapplicable)
- [basePayAddition](PayrollGroupsServiceItemCreateRequest.md#basepayaddition)
- [description](PayrollGroupsServiceItemCreateRequest.md#description)
- [divisor](PayrollGroupsServiceItemCreateRequest.md#divisor)
- [maxAmount](PayrollGroupsServiceItemCreateRequest.md#maxamount)
- [minAmount](PayrollGroupsServiceItemCreateRequest.md#minamount)
- [payrollGroupId](PayrollGroupsServiceItemCreateRequest.md#payrollgroupid)
- [payrollParamId](PayrollGroupsServiceItemCreateRequest.md#payrollparamid)
- [userComment](PayrollGroupsServiceItemCreateRequest.md#usercomment)
- [valueType](PayrollGroupsServiceItemCreateRequest.md#valuetype)
- [fields](PayrollGroupsServiceItemCreateRequest.md#fields)
- [runtime](PayrollGroupsServiceItemCreateRequest.md#runtime)
- [typeName](PayrollGroupsServiceItemCreateRequest.md#typename)

### Methods

- [clone](PayrollGroupsServiceItemCreateRequest.md#clone)
- [equals](PayrollGroupsServiceItemCreateRequest.md#equals)
- [fromBinary](PayrollGroupsServiceItemCreateRequest.md#frombinary)
- [fromJson](PayrollGroupsServiceItemCreateRequest.md#fromjson)
- [fromJsonString](PayrollGroupsServiceItemCreateRequest.md#fromjsonstring)
- [getType](PayrollGroupsServiceItemCreateRequest.md#gettype)
- [toBinary](PayrollGroupsServiceItemCreateRequest.md#tobinary)
- [toJSON](PayrollGroupsServiceItemCreateRequest.md#tojson)
- [toJson](PayrollGroupsServiceItemCreateRequest.md#tojson-1)
- [toJsonString](PayrollGroupsServiceItemCreateRequest.md#tojsonstring)
- [equals](PayrollGroupsServiceItemCreateRequest.md#equals-1)
- [fromBinary](PayrollGroupsServiceItemCreateRequest.md#frombinary-1)
- [fromJson](PayrollGroupsServiceItemCreateRequest.md#fromjson-1)
- [fromJsonString](PayrollGroupsServiceItemCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new PayrollGroupsServiceItemCreateRequest**(`data?`): [`PayrollGroupsServiceItemCreateRequest`](PayrollGroupsServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PayrollGroupsServiceItemCreateRequest`](PayrollGroupsServiceItemCreateRequest.md)\> |

#### Returns

[`PayrollGroupsServiceItemCreateRequest`](PayrollGroupsServiceItemCreateRequest.md)

#### Overrides

Message\&lt;PayrollGroupsServiceItemCreateRequest\&gt;.constructor

#### Defined in

src/payroll_groups.scailo_pb.ts:467

## Properties

### amountPercentageOnWhichTaxApplicable

• **amountPercentageOnWhichTaxApplicable**: `bigint` = `protoInt64.zero`

Stores the amount (in terms of percentage) on which any associated payroll tax is applicable

**`Generated`**

from field: uint64 amount_percentage_on_which_tax_applicable = 25;

#### Defined in

src/payroll_groups.scailo_pb.ts:458

___

### basePayAddition

• **basePayAddition**: `bigint` = `protoInt64.zero`

Stores the base pay addition amount in terms of value_type (if value_type is percentage, then base_pay determines the percentage)

**`Generated`**

from field: uint64 base_pay_addition = 21;

#### Defined in

src/payroll_groups.scailo_pb.ts:430

___

### description

• **description**: `string` = `""`

An optional description

**`Generated`**

from field: string description = 40;

#### Defined in

src/payroll_groups.scailo_pb.ts:465

___

### divisor

• **divisor**: `bigint` = `protoInt64.zero`

Stores the divisor with which the base_pay_addition needs to be divided by, in order to get the actual base pay value

**`Generated`**

from field: uint64 divisor = 22;

#### Defined in

src/payroll_groups.scailo_pb.ts:437

___

### maxAmount

• **maxAmount**: `bigint` = `protoInt64.zero`

The maximum amount of applicable tax (will be disregarded if value is -100)

**`Generated`**

from field: int64 max_amount = 24;

#### Defined in

src/payroll_groups.scailo_pb.ts:451

___

### minAmount

• **minAmount**: `bigint` = `protoInt64.zero`

The minimum amount of applicable tax (will be disregarded if value is -100)

**`Generated`**

from field: int64 min_amount = 23;

#### Defined in

src/payroll_groups.scailo_pb.ts:444

___

### payrollGroupId

• **payrollGroupId**: `bigint` = `protoInt64.zero`

Stores the ID of the payroll group

**`Generated`**

from field: uint64 payroll_group_id = 10;

#### Defined in

src/payroll_groups.scailo_pb.ts:409

___

### payrollParamId

• **payrollParamId**: `bigint` = `protoInt64.zero`

The ID of the payroll param that is a part of the payroll group

**`Generated`**

from field: uint64 payroll_param_id = 11;

#### Defined in

src/payroll_groups.scailo_pb.ts:416

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/payroll_groups.scailo_pb.ts:402

___

### valueType

• **valueType**: [`PAYROLL_GROUP_ITEM_VALUE_TYPE`](../enums/PAYROLL_GROUP_ITEM_VALUE_TYPE.md) = `PAYROLL_GROUP_ITEM_VALUE_TYPE.PAYROLL_GROUP_ITEM_VALUE_TYPE_ANY_UNSPECIFIED`

The value type of the item

**`Generated`**

from field: Scailo.PAYROLL_GROUP_ITEM_VALUE_TYPE value_type = 20;

#### Defined in

src/payroll_groups.scailo_pb.ts:423

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/payroll_groups.scailo_pb.ts:474

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/payroll_groups.scailo_pb.ts:472

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PayrollGroupsServiceItemCreateRequest"``

#### Defined in

src/payroll_groups.scailo_pb.ts:473

## Methods

### clone

▸ **clone**(): [`PayrollGroupsServiceItemCreateRequest`](PayrollGroupsServiceItemCreateRequest.md)

Create a deep copy.

#### Returns

[`PayrollGroupsServiceItemCreateRequest`](PayrollGroupsServiceItemCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`PayrollGroupsServiceItemCreateRequest`](PayrollGroupsServiceItemCreateRequest.md) \| `PlainMessage`\<[`PayrollGroupsServiceItemCreateRequest`](PayrollGroupsServiceItemCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`PayrollGroupsServiceItemCreateRequest`](PayrollGroupsServiceItemCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PayrollGroupsServiceItemCreateRequest`](PayrollGroupsServiceItemCreateRequest.md)\>

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
| `a` | `undefined` \| [`PayrollGroupsServiceItemCreateRequest`](PayrollGroupsServiceItemCreateRequest.md) \| `PlainMessage`\<[`PayrollGroupsServiceItemCreateRequest`](PayrollGroupsServiceItemCreateRequest.md)\> |
| `b` | `undefined` \| [`PayrollGroupsServiceItemCreateRequest`](PayrollGroupsServiceItemCreateRequest.md) \| `PlainMessage`\<[`PayrollGroupsServiceItemCreateRequest`](PayrollGroupsServiceItemCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/payroll_groups.scailo_pb.ts:499

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PayrollGroupsServiceItemCreateRequest`](PayrollGroupsServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PayrollGroupsServiceItemCreateRequest`](PayrollGroupsServiceItemCreateRequest.md)

#### Defined in

src/payroll_groups.scailo_pb.ts:487

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PayrollGroupsServiceItemCreateRequest`](PayrollGroupsServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PayrollGroupsServiceItemCreateRequest`](PayrollGroupsServiceItemCreateRequest.md)

#### Defined in

src/payroll_groups.scailo_pb.ts:491

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PayrollGroupsServiceItemCreateRequest`](PayrollGroupsServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PayrollGroupsServiceItemCreateRequest`](PayrollGroupsServiceItemCreateRequest.md)

#### Defined in

src/payroll_groups.scailo_pb.ts:495
