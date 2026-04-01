[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QCGroupItem

# Class: QCGroupItem

Describes the parameters that constitute a param associated to a qc group

**`Generated`**

from message Scailo.QCGroupItem

## Hierarchy

- `Message`\<[`QCGroupItem`](QCGroupItem.md)\>

  ↳ **`QCGroupItem`**

## Table of contents

### Constructors

- [constructor](QCGroupItem.md#constructor)

### Properties

- [acceptableValueType](QCGroupItem.md#acceptablevaluetype)
- [approvalMetadata](QCGroupItem.md#approvalmetadata)
- [description](QCGroupItem.md#description)
- [entityUuid](QCGroupItem.md#entityuuid)
- [isInternal](QCGroupItem.md#isinternal)
- [metadata](QCGroupItem.md#metadata)
- [needApproval](QCGroupItem.md#needapproval)
- [numberAcceptableValue](QCGroupItem.md#numberacceptablevalue)
- [numberRelativeLowerBound](QCGroupItem.md#numberrelativelowerbound)
- [numberRelativeUpperBound](QCGroupItem.md#numberrelativeupperbound)
- [qcGroupId](QCGroupItem.md#qcgroupid)
- [qcParamId](QCGroupItem.md#qcparamid)
- [textAcceptableValues](QCGroupItem.md#textacceptablevalues)
- [textAcceptableValuesWithDeviation](QCGroupItem.md#textacceptablevalueswithdeviation)
- [textUnacceptableValues](QCGroupItem.md#textunacceptablevalues)
- [uomId](QCGroupItem.md#uomid)
- [userComment](QCGroupItem.md#usercomment)
- [fields](QCGroupItem.md#fields)
- [runtime](QCGroupItem.md#runtime)
- [typeName](QCGroupItem.md#typename)

### Methods

- [clone](QCGroupItem.md#clone)
- [equals](QCGroupItem.md#equals)
- [fromBinary](QCGroupItem.md#frombinary)
- [fromJson](QCGroupItem.md#fromjson)
- [fromJsonString](QCGroupItem.md#fromjsonstring)
- [getType](QCGroupItem.md#gettype)
- [toBinary](QCGroupItem.md#tobinary)
- [toJSON](QCGroupItem.md#tojson)
- [toJson](QCGroupItem.md#tojson-1)
- [toJsonString](QCGroupItem.md#tojsonstring)
- [equals](QCGroupItem.md#equals-1)
- [fromBinary](QCGroupItem.md#frombinary-1)
- [fromJson](QCGroupItem.md#fromjson-1)
- [fromJsonString](QCGroupItem.md#fromjsonstring-1)

## Constructors

### constructor

• **new QCGroupItem**(`data?`): [`QCGroupItem`](QCGroupItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QCGroupItem`](QCGroupItem.md)\> |

#### Returns

[`QCGroupItem`](QCGroupItem.md)

#### Overrides

Message\&lt;QCGroupItem\&gt;.constructor

#### Defined in

[src/qc_groups.scailo_pb.ts:1010](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/qc_groups.scailo_pb.ts#L1010)

## Properties

### acceptableValueType

• **acceptableValueType**: [`QC_GROUP_ITEM_ACCEPTABLE_VALUE_TYPE`](../enums/QC_GROUP_ITEM_ACCEPTABLE_VALUE_TYPE.md) = `QC_GROUP_ITEM_ACCEPTABLE_VALUE_TYPE.QC_GROUP_ITEM_ACCEPTABLE_VALUE_TYPE_ANY_UNSPECIFIED`

The acceptable value type of the item

**`Generated`**

from field: Scailo.QC_GROUP_ITEM_ACCEPTABLE_VALUE_TYPE acceptable_value_type = 20;

#### Defined in

[src/qc_groups.scailo_pb.ts:959](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/qc_groups.scailo_pb.ts#L959)

___

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/qc_groups.scailo_pb.ts:909](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/qc_groups.scailo_pb.ts#L909)

___

### description

• **description**: `string` = `""`

An optional description

**`Generated`**

from field: string description = 40;

#### Defined in

[src/qc_groups.scailo_pb.ts:1008](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/qc_groups.scailo_pb.ts#L1008)

___

### entityUuid

• **entityUuid**: `string` = `""`

**`Description`**

The organization's globally unique identifier.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/qc_groups.scailo_pb.ts:893](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/qc_groups.scailo_pb.ts#L893)

___

### isInternal

• **isInternal**: `boolean` = `false`

Denotes if this parameter is internal or not (if set to true, then this value will be hidden. If set to false, then this value will be printed)

**`Generated`**

from field: bool is_internal = 19;

#### Defined in

[src/qc_groups.scailo_pb.ts:952](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/qc_groups.scailo_pb.ts#L952)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/qc_groups.scailo_pb.ts:901](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/qc_groups.scailo_pb.ts#L901)

___

### needApproval

• **needApproval**: `boolean` = `false`

**`Description`**

The approval state of the record

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

[src/qc_groups.scailo_pb.ts:917](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/qc_groups.scailo_pb.ts#L917)

___

### numberAcceptableValue

• **numberAcceptableValue**: `bigint` = `protoInt64.zero`

The acceptable value (in cents) in case the acceptable value type is number-absolute or number-percentage

**`Generated`**

from field: int64 number_acceptable_value = 21;

#### Defined in

[src/qc_groups.scailo_pb.ts:966](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/qc_groups.scailo_pb.ts#L966)

___

### numberRelativeLowerBound

• **numberRelativeLowerBound**: `bigint` = `protoInt64.zero`

The relative lower bound (in cents) of the number_acceptable_value that serves as a reference point for the test

**`Generated`**

from field: int64 number_relative_lower_bound = 22;

#### Defined in

[src/qc_groups.scailo_pb.ts:973](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/qc_groups.scailo_pb.ts#L973)

___

### numberRelativeUpperBound

• **numberRelativeUpperBound**: `bigint` = `protoInt64.zero`

The relative upper bound (in cents) of the number_acceptable_value that serves as a reference point for the test

**`Generated`**

from field: int64 number_relative_upper_bound = 23;

#### Defined in

[src/qc_groups.scailo_pb.ts:980](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/qc_groups.scailo_pb.ts#L980)

___

### qcGroupId

• **qcGroupId**: `bigint` = `protoInt64.zero`

Stores the ID of the qc group

**`Generated`**

from field: uint64 qc_group_id = 10;

#### Defined in

[src/qc_groups.scailo_pb.ts:931](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/qc_groups.scailo_pb.ts#L931)

___

### qcParamId

• **qcParamId**: `bigint` = `protoInt64.zero`

The ID of the qc param that is a part of the qc group

**`Generated`**

from field: uint64 qc_param_id = 11;

#### Defined in

[src/qc_groups.scailo_pb.ts:938](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/qc_groups.scailo_pb.ts#L938)

___

### textAcceptableValues

• **textAcceptableValues**: `string`[] = `[]`

The list of values that are acceptable in case the acceptable value type is text-input or text-dropdown

**`Generated`**

from field: repeated string text_acceptable_values = 30;

#### Defined in

[src/qc_groups.scailo_pb.ts:987](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/qc_groups.scailo_pb.ts#L987)

___

### textAcceptableValuesWithDeviation

• **textAcceptableValuesWithDeviation**: `string`[] = `[]`

The list of values that are acceptable (but with deviation) in case the acceptable value type is text-input or text-dropdown

**`Generated`**

from field: repeated string text_acceptable_values_with_deviation = 31;

#### Defined in

[src/qc_groups.scailo_pb.ts:994](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/qc_groups.scailo_pb.ts#L994)

___

### textUnacceptableValues

• **textUnacceptableValues**: `string`[] = `[]`

The list of unacceptable values in case the acceptable value type is text-input or text-dropdown

**`Generated`**

from field: repeated string text_unacceptable_values = 32;

#### Defined in

[src/qc_groups.scailo_pb.ts:1001](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/qc_groups.scailo_pb.ts#L1001)

___

### uomId

• **uomId**: `bigint` = `protoInt64.zero`

The ID of the associated unit of material

**`Generated`**

from field: uint64 uom_id = 12;

#### Defined in

[src/qc_groups.scailo_pb.ts:945](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/qc_groups.scailo_pb.ts#L945)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

[src/qc_groups.scailo_pb.ts:924](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/qc_groups.scailo_pb.ts#L924)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/qc_groups.scailo_pb.ts:1017](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/qc_groups.scailo_pb.ts#L1017)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/qc_groups.scailo_pb.ts:1015](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/qc_groups.scailo_pb.ts#L1015)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QCGroupItem"``

#### Defined in

[src/qc_groups.scailo_pb.ts:1016](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/qc_groups.scailo_pb.ts#L1016)

## Methods

### clone

▸ **clone**(): [`QCGroupItem`](QCGroupItem.md)

Create a deep copy.

#### Returns

[`QCGroupItem`](QCGroupItem.md)

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
| `other` | `undefined` \| ``null`` \| [`QCGroupItem`](QCGroupItem.md) \| `PlainMessage`\<[`QCGroupItem`](QCGroupItem.md)\> |

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

▸ **getType**(): `MessageType`\<[`QCGroupItem`](QCGroupItem.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QCGroupItem`](QCGroupItem.md)\>

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
| `a` | `undefined` \| [`QCGroupItem`](QCGroupItem.md) \| `PlainMessage`\<[`QCGroupItem`](QCGroupItem.md)\> |
| `b` | `undefined` \| [`QCGroupItem`](QCGroupItem.md) \| `PlainMessage`\<[`QCGroupItem`](QCGroupItem.md)\> |

#### Returns

`boolean`

#### Defined in

[src/qc_groups.scailo_pb.ts:1049](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/qc_groups.scailo_pb.ts#L1049)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QCGroupItem`](QCGroupItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QCGroupItem`](QCGroupItem.md)

#### Defined in

[src/qc_groups.scailo_pb.ts:1037](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/qc_groups.scailo_pb.ts#L1037)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QCGroupItem`](QCGroupItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCGroupItem`](QCGroupItem.md)

#### Defined in

[src/qc_groups.scailo_pb.ts:1041](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/qc_groups.scailo_pb.ts#L1041)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QCGroupItem`](QCGroupItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCGroupItem`](QCGroupItem.md)

#### Defined in

[src/qc_groups.scailo_pb.ts:1045](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/qc_groups.scailo_pb.ts#L1045)
