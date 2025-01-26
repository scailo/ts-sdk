[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QCSampleParameter

# Class: QCSampleParameter

Describes the parameters that constitute an parameter associated to a qc sample

**`Generated`**

from message Scailo.QCSampleParameter

## Hierarchy

- `Message`\<[`QCSampleParameter`](QCSampleParameter.md)\>

  ↳ **`QCSampleParameter`**

## Table of contents

### Constructors

- [constructor](QCSampleParameter.md#constructor)

### Properties

- [acceptableValueType](QCSampleParameter.md#acceptablevaluetype)
- [checkedAt](QCSampleParameter.md#checkedat)
- [checkedBy](QCSampleParameter.md#checkedby)
- [description](QCSampleParameter.md#description)
- [entityUuid](QCSampleParameter.md#entityuuid)
- [isInternal](QCSampleParameter.md#isinternal)
- [metadata](QCSampleParameter.md#metadata)
- [numberAcceptableValue](QCSampleParameter.md#numberacceptablevalue)
- [numberObservedValue](QCSampleParameter.md#numberobservedvalue)
- [numberRelativeLowerBound](QCSampleParameter.md#numberrelativelowerbound)
- [numberRelativeUpperBound](QCSampleParameter.md#numberrelativeupperbound)
- [qcParamId](QCSampleParameter.md#qcparamid)
- [qcSampleId](QCSampleParameter.md#qcsampleid)
- [textAcceptableValues](QCSampleParameter.md#textacceptablevalues)
- [textAcceptableValuesWithDeviation](QCSampleParameter.md#textacceptablevalueswithdeviation)
- [textObservedValue](QCSampleParameter.md#textobservedvalue)
- [textUnacceptableValues](QCSampleParameter.md#textunacceptablevalues)
- [uomId](QCSampleParameter.md#uomid)
- [userComment](QCSampleParameter.md#usercomment)
- [fields](QCSampleParameter.md#fields)
- [runtime](QCSampleParameter.md#runtime)
- [typeName](QCSampleParameter.md#typename)

### Methods

- [clone](QCSampleParameter.md#clone)
- [equals](QCSampleParameter.md#equals)
- [fromBinary](QCSampleParameter.md#frombinary)
- [fromJson](QCSampleParameter.md#fromjson)
- [fromJsonString](QCSampleParameter.md#fromjsonstring)
- [getType](QCSampleParameter.md#gettype)
- [toBinary](QCSampleParameter.md#tobinary)
- [toJSON](QCSampleParameter.md#tojson)
- [toJson](QCSampleParameter.md#tojson-1)
- [toJsonString](QCSampleParameter.md#tojsonstring)
- [equals](QCSampleParameter.md#equals-1)
- [fromBinary](QCSampleParameter.md#frombinary-1)
- [fromJson](QCSampleParameter.md#fromjson-1)
- [fromJsonString](QCSampleParameter.md#fromjsonstring-1)

## Constructors

### constructor

• **new QCSampleParameter**(`data?`): [`QCSampleParameter`](QCSampleParameter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QCSampleParameter`](QCSampleParameter.md)\> |

#### Returns

[`QCSampleParameter`](QCSampleParameter.md)

#### Overrides

Message\&lt;QCSampleParameter\&gt;.constructor

#### Defined in

src/qc_samples.scailo_pb.ts:1816

## Properties

### acceptableValueType

• **acceptableValueType**: [`QC_GROUP_ITEM_ACCEPTABLE_VALUE_TYPE`](../enums/QC_GROUP_ITEM_ACCEPTABLE_VALUE_TYPE.md) = `QC_GROUP_ITEM_ACCEPTABLE_VALUE_TYPE.QC_GROUP_ITEM_ACCEPTABLE_VALUE_TYPE_ANY_UNSPECIFIED`

The acceptable value type of the item

**`Generated`**

from field: Scailo.QC_GROUP_ITEM_ACCEPTABLE_VALUE_TYPE acceptable_value_type = 20;

#### Defined in

src/qc_samples.scailo_pb.ts:1765

___

### checkedAt

• **checkedAt**: `bigint` = `protoInt64.zero`

Stores the timestamp of when this check was performed

**`Generated`**

from field: uint64 checked_at = 9;

#### Defined in

src/qc_samples.scailo_pb.ts:1716

___

### checkedBy

• **checkedBy**: `string` = `""`

Stores the username of the employee who performed the check

**`Generated`**

from field: string checked_by = 8;

#### Defined in

src/qc_samples.scailo_pb.ts:1709

___

### description

• **description**: `string` = `""`

An optional description

**`Generated`**

from field: string description = 40;

#### Defined in

src/qc_samples.scailo_pb.ts:1814

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/qc_samples.scailo_pb.ts:1688

___

### isInternal

• **isInternal**: `boolean` = `false`

Denotes if this parameter is internal or not (if set to true, then this value will be hidden. If set to false, then this value will be printed)

**`Generated`**

from field: bool is_internal = 19;

#### Defined in

src/qc_samples.scailo_pb.ts:1758

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this qc sample

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/qc_samples.scailo_pb.ts:1695

___

### numberAcceptableValue

• **numberAcceptableValue**: `bigint` = `protoInt64.zero`

The acceptable value (in cents) in case the acceptable value type is number-absolute or number-percentage

**`Generated`**

from field: int64 number_acceptable_value = 21;

#### Defined in

src/qc_samples.scailo_pb.ts:1772

___

### numberObservedValue

• **numberObservedValue**: `bigint` = `protoInt64.zero`

Stores the observed value when it is a number

**`Generated`**

from field: int64 number_observed_value = 13;

#### Defined in

src/qc_samples.scailo_pb.ts:1744

___

### numberRelativeLowerBound

• **numberRelativeLowerBound**: `bigint` = `protoInt64.zero`

The relative lower bound (in cents) of the number_acceptable_value that serves as a reference point for the test

**`Generated`**

from field: int64 number_relative_lower_bound = 22;

#### Defined in

src/qc_samples.scailo_pb.ts:1779

___

### numberRelativeUpperBound

• **numberRelativeUpperBound**: `bigint` = `protoInt64.zero`

The relative upper bound (in cents) of the number_acceptable_value that serves as a reference point for the test

**`Generated`**

from field: int64 number_relative_upper_bound = 23;

#### Defined in

src/qc_samples.scailo_pb.ts:1786

___

### qcParamId

• **qcParamId**: `bigint` = `protoInt64.zero`

The ID of the qc param that is a part of the qc sample

**`Generated`**

from field: uint64 qc_param_id = 11;

#### Defined in

src/qc_samples.scailo_pb.ts:1730

___

### qcSampleId

• **qcSampleId**: `bigint` = `protoInt64.zero`

Stores the ID of the qc sample

**`Generated`**

from field: uint64 qc_sample_id = 10;

#### Defined in

src/qc_samples.scailo_pb.ts:1723

___

### textAcceptableValues

• **textAcceptableValues**: `string`[] = `[]`

The list of values that are acceptable in case the acceptable value type is text-input or text-dropdown

**`Generated`**

from field: repeated string text_acceptable_values = 30;

#### Defined in

src/qc_samples.scailo_pb.ts:1793

___

### textAcceptableValuesWithDeviation

• **textAcceptableValuesWithDeviation**: `string`[] = `[]`

The list of values that are acceptable (but with deviation) in case the acceptable value type is text-input or text-dropdown

**`Generated`**

from field: repeated string text_acceptable_values_with_deviation = 31;

#### Defined in

src/qc_samples.scailo_pb.ts:1800

___

### textObservedValue

• **textObservedValue**: `string` = `""`

Stores the observed value when it is a string

**`Generated`**

from field: string text_observed_value = 14;

#### Defined in

src/qc_samples.scailo_pb.ts:1751

___

### textUnacceptableValues

• **textUnacceptableValues**: `string`[] = `[]`

The list of unacceptable values in case the acceptable value type is text-input or text-dropdown

**`Generated`**

from field: repeated string text_unacceptable_values = 32;

#### Defined in

src/qc_samples.scailo_pb.ts:1807

___

### uomId

• **uomId**: `bigint` = `protoInt64.zero`

The ID of the associated unit of material

**`Generated`**

from field: uint64 uom_id = 12;

#### Defined in

src/qc_samples.scailo_pb.ts:1737

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

src/qc_samples.scailo_pb.ts:1702

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/qc_samples.scailo_pb.ts:1823

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/qc_samples.scailo_pb.ts:1821

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QCSampleParameter"``

#### Defined in

src/qc_samples.scailo_pb.ts:1822

## Methods

### clone

▸ **clone**(): [`QCSampleParameter`](QCSampleParameter.md)

Create a deep copy.

#### Returns

[`QCSampleParameter`](QCSampleParameter.md)

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
| `other` | `undefined` \| ``null`` \| [`QCSampleParameter`](QCSampleParameter.md) \| `PlainMessage`\<[`QCSampleParameter`](QCSampleParameter.md)\> |

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

▸ **getType**(): `MessageType`\<[`QCSampleParameter`](QCSampleParameter.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QCSampleParameter`](QCSampleParameter.md)\>

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
| `a` | `undefined` \| [`QCSampleParameter`](QCSampleParameter.md) \| `PlainMessage`\<[`QCSampleParameter`](QCSampleParameter.md)\> |
| `b` | `undefined` \| [`QCSampleParameter`](QCSampleParameter.md) \| `PlainMessage`\<[`QCSampleParameter`](QCSampleParameter.md)\> |

#### Returns

`boolean`

#### Defined in

src/qc_samples.scailo_pb.ts:1857

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QCSampleParameter`](QCSampleParameter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QCSampleParameter`](QCSampleParameter.md)

#### Defined in

src/qc_samples.scailo_pb.ts:1845

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QCSampleParameter`](QCSampleParameter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCSampleParameter`](QCSampleParameter.md)

#### Defined in

src/qc_samples.scailo_pb.ts:1849

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QCSampleParameter`](QCSampleParameter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCSampleParameter`](QCSampleParameter.md)

#### Defined in

src/qc_samples.scailo_pb.ts:1853
