[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QCSampleParameterHistory

# Class: QCSampleParameterHistory

Describes the parameters that are present in a history response

**`Generated`**

from message Scailo.QCSampleParameterHistory

## Hierarchy

- `Message`\<[`QCSampleParameterHistory`](QCSampleParameterHistory.md)\>

  ↳ **`QCSampleParameterHistory`**

## Table of contents

### Constructors

- [constructor](QCSampleParameterHistory.md#constructor)

### Properties

- [checkedAt](QCSampleParameterHistory.md#checkedat)
- [checkedBy](QCSampleParameterHistory.md#checkedby)
- [description](QCSampleParameterHistory.md#description)
- [entityUuid](QCSampleParameterHistory.md#entityuuid)
- [metadata](QCSampleParameterHistory.md#metadata)
- [numberObservedValue](QCSampleParameterHistory.md#numberobservedvalue)
- [qcSampleParameterId](QCSampleParameterHistory.md#qcsampleparameterid)
- [textObservedValue](QCSampleParameterHistory.md#textobservedvalue)
- [userComment](QCSampleParameterHistory.md#usercomment)
- [fields](QCSampleParameterHistory.md#fields)
- [runtime](QCSampleParameterHistory.md#runtime)
- [typeName](QCSampleParameterHistory.md#typename)

### Methods

- [clone](QCSampleParameterHistory.md#clone)
- [equals](QCSampleParameterHistory.md#equals)
- [fromBinary](QCSampleParameterHistory.md#frombinary)
- [fromJson](QCSampleParameterHistory.md#fromjson)
- [fromJsonString](QCSampleParameterHistory.md#fromjsonstring)
- [getType](QCSampleParameterHistory.md#gettype)
- [toBinary](QCSampleParameterHistory.md#tobinary)
- [toJSON](QCSampleParameterHistory.md#tojson)
- [toJson](QCSampleParameterHistory.md#tojson-1)
- [toJsonString](QCSampleParameterHistory.md#tojsonstring)
- [equals](QCSampleParameterHistory.md#equals-1)
- [fromBinary](QCSampleParameterHistory.md#frombinary-1)
- [fromJson](QCSampleParameterHistory.md#fromjson-1)
- [fromJsonString](QCSampleParameterHistory.md#fromjsonstring-1)

## Constructors

### constructor

• **new QCSampleParameterHistory**(`data?`): [`QCSampleParameterHistory`](QCSampleParameterHistory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QCSampleParameterHistory`](QCSampleParameterHistory.md)\> |

#### Returns

[`QCSampleParameterHistory`](QCSampleParameterHistory.md)

#### Overrides

Message\&lt;QCSampleParameterHistory\&gt;.constructor

#### Defined in

[src/qc_samples.scailo_pb.ts:2333](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/qc_samples.scailo_pb.ts#L2333)

## Properties

### checkedAt

• **checkedAt**: `bigint` = `protoInt64.zero`

Stores the timestamp of when this check was performed

**`Generated`**

from field: uint64 checked_at = 9;

#### Defined in

[src/qc_samples.scailo_pb.ts:2303](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/qc_samples.scailo_pb.ts#L2303)

___

### checkedBy

• **checkedBy**: `string` = `""`

Stores the username of the employee who performed the check

**`Generated`**

from field: string checked_by = 8;

#### Defined in

[src/qc_samples.scailo_pb.ts:2296](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/qc_samples.scailo_pb.ts#L2296)

___

### description

• **description**: `string` = `""`

An optional description

**`Generated`**

from field: string description = 40;

#### Defined in

[src/qc_samples.scailo_pb.ts:2331](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/qc_samples.scailo_pb.ts#L2331)

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

[src/qc_samples.scailo_pb.ts:2275](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/qc_samples.scailo_pb.ts#L2275)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this qc sample

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/qc_samples.scailo_pb.ts:2282](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/qc_samples.scailo_pb.ts#L2282)

___

### numberObservedValue

• **numberObservedValue**: `bigint` = `protoInt64.zero`

Stores the observed value when it is a number

**`Generated`**

from field: int64 number_observed_value = 13;

#### Defined in

[src/qc_samples.scailo_pb.ts:2317](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/qc_samples.scailo_pb.ts#L2317)

___

### qcSampleParameterId

• **qcSampleParameterId**: `bigint` = `protoInt64.zero`

Stores the ID of the qc sample parameter

**`Generated`**

from field: uint64 qc_sample_parameter_id = 10;

#### Defined in

[src/qc_samples.scailo_pb.ts:2310](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/qc_samples.scailo_pb.ts#L2310)

___

### textObservedValue

• **textObservedValue**: `string` = `""`

Stores the observed value when it is a string

**`Generated`**

from field: string text_observed_value = 14;

#### Defined in

[src/qc_samples.scailo_pb.ts:2324](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/qc_samples.scailo_pb.ts#L2324)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

[src/qc_samples.scailo_pb.ts:2289](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/qc_samples.scailo_pb.ts#L2289)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/qc_samples.scailo_pb.ts:2340](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/qc_samples.scailo_pb.ts#L2340)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/qc_samples.scailo_pb.ts:2338](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/qc_samples.scailo_pb.ts#L2338)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QCSampleParameterHistory"``

#### Defined in

[src/qc_samples.scailo_pb.ts:2339](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/qc_samples.scailo_pb.ts#L2339)

## Methods

### clone

▸ **clone**(): [`QCSampleParameterHistory`](QCSampleParameterHistory.md)

Create a deep copy.

#### Returns

[`QCSampleParameterHistory`](QCSampleParameterHistory.md)

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
| `other` | `undefined` \| ``null`` \| [`QCSampleParameterHistory`](QCSampleParameterHistory.md) \| `PlainMessage`\<[`QCSampleParameterHistory`](QCSampleParameterHistory.md)\> |

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

▸ **getType**(): `MessageType`\<[`QCSampleParameterHistory`](QCSampleParameterHistory.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QCSampleParameterHistory`](QCSampleParameterHistory.md)\>

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
| `a` | `undefined` \| [`QCSampleParameterHistory`](QCSampleParameterHistory.md) \| `PlainMessage`\<[`QCSampleParameterHistory`](QCSampleParameterHistory.md)\> |
| `b` | `undefined` \| [`QCSampleParameterHistory`](QCSampleParameterHistory.md) \| `PlainMessage`\<[`QCSampleParameterHistory`](QCSampleParameterHistory.md)\> |

#### Returns

`boolean`

#### Defined in

[src/qc_samples.scailo_pb.ts:2364](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/qc_samples.scailo_pb.ts#L2364)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QCSampleParameterHistory`](QCSampleParameterHistory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QCSampleParameterHistory`](QCSampleParameterHistory.md)

#### Defined in

[src/qc_samples.scailo_pb.ts:2352](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/qc_samples.scailo_pb.ts#L2352)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QCSampleParameterHistory`](QCSampleParameterHistory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCSampleParameterHistory`](QCSampleParameterHistory.md)

#### Defined in

[src/qc_samples.scailo_pb.ts:2356](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/qc_samples.scailo_pb.ts#L2356)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QCSampleParameterHistory`](QCSampleParameterHistory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCSampleParameterHistory`](QCSampleParameterHistory.md)

#### Defined in

[src/qc_samples.scailo_pb.ts:2360](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/qc_samples.scailo_pb.ts#L2360)
