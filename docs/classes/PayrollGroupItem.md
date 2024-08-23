[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / PayrollGroupItem

# Class: PayrollGroupItem

Describes the parameters that constitute a param associated to a payroll group

**`Generated`**

from message Scailo.PayrollGroupItem

## Hierarchy

- `Message`\<[`PayrollGroupItem`](PayrollGroupItem.md)\>

  ↳ **`PayrollGroupItem`**

## Table of contents

### Constructors

- [constructor](PayrollGroupItem.md#constructor)

### Properties

- [amountPercentageOnWhichTaxApplicable](PayrollGroupItem.md#amountpercentageonwhichtaxapplicable)
- [approvalMetadata](PayrollGroupItem.md#approvalmetadata)
- [basePayAddition](PayrollGroupItem.md#basepayaddition)
- [description](PayrollGroupItem.md#description)
- [divisor](PayrollGroupItem.md#divisor)
- [entityUuid](PayrollGroupItem.md#entityuuid)
- [maxAmount](PayrollGroupItem.md#maxamount)
- [metadata](PayrollGroupItem.md#metadata)
- [minAmount](PayrollGroupItem.md#minamount)
- [needApproval](PayrollGroupItem.md#needapproval)
- [payrollGroupId](PayrollGroupItem.md#payrollgroupid)
- [payrollParamId](PayrollGroupItem.md#payrollparamid)
- [userComment](PayrollGroupItem.md#usercomment)
- [valueType](PayrollGroupItem.md#valuetype)
- [fields](PayrollGroupItem.md#fields)
- [runtime](PayrollGroupItem.md#runtime)
- [typeName](PayrollGroupItem.md#typename)

### Methods

- [clone](PayrollGroupItem.md#clone)
- [equals](PayrollGroupItem.md#equals)
- [fromBinary](PayrollGroupItem.md#frombinary)
- [fromJson](PayrollGroupItem.md#fromjson)
- [fromJsonString](PayrollGroupItem.md#fromjsonstring)
- [getType](PayrollGroupItem.md#gettype)
- [toBinary](PayrollGroupItem.md#tobinary)
- [toJSON](PayrollGroupItem.md#tojson)
- [toJson](PayrollGroupItem.md#tojson-1)
- [toJsonString](PayrollGroupItem.md#tojsonstring)
- [equals](PayrollGroupItem.md#equals-1)
- [fromBinary](PayrollGroupItem.md#frombinary-1)
- [fromJson](PayrollGroupItem.md#fromjson-1)
- [fromJsonString](PayrollGroupItem.md#fromjsonstring-1)

## Constructors

### constructor

• **new PayrollGroupItem**(`data?`): [`PayrollGroupItem`](PayrollGroupItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PayrollGroupItem`](PayrollGroupItem.md)\> |

#### Returns

[`PayrollGroupItem`](PayrollGroupItem.md)

#### Overrides

Message\&lt;PayrollGroupItem\&gt;.constructor

#### Defined in

src/payroll_groups.scailo_pb.ts:715

## Properties

### amountPercentageOnWhichTaxApplicable

• **amountPercentageOnWhichTaxApplicable**: `bigint` = `protoInt64.zero`

Stores the amount (in terms of percentage) on which any associated payroll tax is applicable

**`Generated`**

from field: uint64 amount_percentage_on_which_tax_applicable = 25;

#### Defined in

src/payroll_groups.scailo_pb.ts:706

___

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

src/payroll_groups.scailo_pb.ts:636

___

### basePayAddition

• **basePayAddition**: `bigint` = `protoInt64.zero`

Stores the base pay addition amount in terms of value_type (if value_type is percentage, then base_pay determines the percentage)

**`Generated`**

from field: uint64 base_pay_addition = 21;

#### Defined in

src/payroll_groups.scailo_pb.ts:678

___

### description

• **description**: `string` = `""`

An optional description

**`Generated`**

from field: string description = 40;

#### Defined in

src/payroll_groups.scailo_pb.ts:713

___

### divisor

• **divisor**: `bigint` = `protoInt64.zero`

Stores the divisor with which the base_pay_addition needs to be divided by, in order to get the actual base pay value

**`Generated`**

from field: uint64 divisor = 22;

#### Defined in

src/payroll_groups.scailo_pb.ts:685

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/payroll_groups.scailo_pb.ts:622

___

### maxAmount

• **maxAmount**: `bigint` = `protoInt64.zero`

The maximum amount of applicable tax (will be disregarded if value is -100)

**`Generated`**

from field: int64 max_amount = 24;

#### Defined in

src/payroll_groups.scailo_pb.ts:699

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this payroll group

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/payroll_groups.scailo_pb.ts:629

___

### minAmount

• **minAmount**: `bigint` = `protoInt64.zero`

The minimum amount of applicable tax (will be disregarded if value is -100)

**`Generated`**

from field: int64 min_amount = 23;

#### Defined in

src/payroll_groups.scailo_pb.ts:692

___

### needApproval

• **needApproval**: `boolean` = `false`

Denotes if this record requires approval (or has been approved)

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

src/payroll_groups.scailo_pb.ts:643

___

### payrollGroupId

• **payrollGroupId**: `bigint` = `protoInt64.zero`

Stores the ID of the payroll group

**`Generated`**

from field: uint64 payroll_group_id = 10;

#### Defined in

src/payroll_groups.scailo_pb.ts:657

___

### payrollParamId

• **payrollParamId**: `bigint` = `protoInt64.zero`

The ID of the payroll param that is a part of the payroll group

**`Generated`**

from field: uint64 payroll_param_id = 11;

#### Defined in

src/payroll_groups.scailo_pb.ts:664

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

src/payroll_groups.scailo_pb.ts:650

___

### valueType

• **valueType**: [`PAYROLL_GROUP_ITEM_VALUE_TYPE`](../enums/PAYROLL_GROUP_ITEM_VALUE_TYPE.md) = `PAYROLL_GROUP_ITEM_VALUE_TYPE.PAYROLL_GROUP_ITEM_VALUE_TYPE_ANY_UNSPECIFIED`

The value type of the item

**`Generated`**

from field: Scailo.PAYROLL_GROUP_ITEM_VALUE_TYPE value_type = 20;

#### Defined in

src/payroll_groups.scailo_pb.ts:671

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/payroll_groups.scailo_pb.ts:722

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/payroll_groups.scailo_pb.ts:720

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PayrollGroupItem"``

#### Defined in

src/payroll_groups.scailo_pb.ts:721

## Methods

### clone

▸ **clone**(): [`PayrollGroupItem`](PayrollGroupItem.md)

Create a deep copy.

#### Returns

[`PayrollGroupItem`](PayrollGroupItem.md)

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
| `other` | `undefined` \| ``null`` \| [`PayrollGroupItem`](PayrollGroupItem.md) \| `PlainMessage`\<[`PayrollGroupItem`](PayrollGroupItem.md)\> |

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

▸ **getType**(): `MessageType`\<[`PayrollGroupItem`](PayrollGroupItem.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PayrollGroupItem`](PayrollGroupItem.md)\>

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
| `a` | `undefined` \| [`PayrollGroupItem`](PayrollGroupItem.md) \| `PlainMessage`\<[`PayrollGroupItem`](PayrollGroupItem.md)\> |
| `b` | `undefined` \| [`PayrollGroupItem`](PayrollGroupItem.md) \| `PlainMessage`\<[`PayrollGroupItem`](PayrollGroupItem.md)\> |

#### Returns

`boolean`

#### Defined in

src/payroll_groups.scailo_pb.ts:751

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PayrollGroupItem`](PayrollGroupItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PayrollGroupItem`](PayrollGroupItem.md)

#### Defined in

src/payroll_groups.scailo_pb.ts:739

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PayrollGroupItem`](PayrollGroupItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PayrollGroupItem`](PayrollGroupItem.md)

#### Defined in

src/payroll_groups.scailo_pb.ts:743

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PayrollGroupItem`](PayrollGroupItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PayrollGroupItem`](PayrollGroupItem.md)

#### Defined in

src/payroll_groups.scailo_pb.ts:747
