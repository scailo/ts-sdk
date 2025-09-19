[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QCSamplesServicePaginationReq

# Class: QCSamplesServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message Scailo.QCSamplesServicePaginationReq

## Hierarchy

- `Message`\<[`QCSamplesServicePaginationReq`](QCSamplesServicePaginationReq.md)\>

  ↳ **`QCSamplesServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](QCSamplesServicePaginationReq.md#constructor)

### Properties

- [count](QCSamplesServicePaginationReq.md#count)
- [isActive](QCSamplesServicePaginationReq.md#isactive)
- [offset](QCSamplesServicePaginationReq.md#offset)
- [sortKey](QCSamplesServicePaginationReq.md#sortkey)
- [sortOrder](QCSamplesServicePaginationReq.md#sortorder)
- [status](QCSamplesServicePaginationReq.md#status)
- [fields](QCSamplesServicePaginationReq.md#fields)
- [runtime](QCSamplesServicePaginationReq.md#runtime)
- [typeName](QCSamplesServicePaginationReq.md#typename)

### Methods

- [clone](QCSamplesServicePaginationReq.md#clone)
- [equals](QCSamplesServicePaginationReq.md#equals)
- [fromBinary](QCSamplesServicePaginationReq.md#frombinary)
- [fromJson](QCSamplesServicePaginationReq.md#fromjson)
- [fromJsonString](QCSamplesServicePaginationReq.md#fromjsonstring)
- [getType](QCSamplesServicePaginationReq.md#gettype)
- [toBinary](QCSamplesServicePaginationReq.md#tobinary)
- [toJSON](QCSamplesServicePaginationReq.md#tojson)
- [toJson](QCSamplesServicePaginationReq.md#tojson-1)
- [toJsonString](QCSamplesServicePaginationReq.md#tojsonstring)
- [equals](QCSamplesServicePaginationReq.md#equals-1)
- [fromBinary](QCSamplesServicePaginationReq.md#frombinary-1)
- [fromJson](QCSamplesServicePaginationReq.md#fromjson-1)
- [fromJsonString](QCSamplesServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new QCSamplesServicePaginationReq**(`data?`): [`QCSamplesServicePaginationReq`](QCSamplesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QCSamplesServicePaginationReq`](QCSamplesServicePaginationReq.md)\> |

#### Returns

[`QCSamplesServicePaginationReq`](QCSamplesServicePaginationReq.md)

#### Overrides

Message\&lt;QCSamplesServicePaginationReq\&gt;.constructor

#### Defined in

[src/qc_samples.scailo_pb.ts:959](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L959)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/qc_samples.scailo_pb.ts:929](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L929)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/qc_samples.scailo_pb.ts:922](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L922)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

[src/qc_samples.scailo_pb.ts:936](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L936)

___

### sortKey

• **sortKey**: [`QC_SAMPLE_SORT_KEY`](../enums/QC_SAMPLE_SORT_KEY.md) = `QC_SAMPLE_SORT_KEY.QC_SAMPLE_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.QC_SAMPLE_SORT_KEY sort_key = 5;

#### Defined in

[src/qc_samples.scailo_pb.ts:950](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L950)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/qc_samples.scailo_pb.ts:943](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L943)

___

### status

• **status**: [`QC_SAMPLE_LIFECYCLE`](../enums/QC_SAMPLE_LIFECYCLE.md) = `QC_SAMPLE_LIFECYCLE.QC_SAMPLE_LIFECYCLE_ANY_UNSPECIFIED`

The status of this qc sample

**`Generated`**

from field: Scailo.QC_SAMPLE_LIFECYCLE status = 6;

#### Defined in

[src/qc_samples.scailo_pb.ts:957](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L957)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/qc_samples.scailo_pb.ts:966](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L966)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/qc_samples.scailo_pb.ts:964](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L964)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QCSamplesServicePaginationReq"``

#### Defined in

[src/qc_samples.scailo_pb.ts:965](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L965)

## Methods

### clone

▸ **clone**(): [`QCSamplesServicePaginationReq`](QCSamplesServicePaginationReq.md)

Create a deep copy.

#### Returns

[`QCSamplesServicePaginationReq`](QCSamplesServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`QCSamplesServicePaginationReq`](QCSamplesServicePaginationReq.md) \| `PlainMessage`\<[`QCSamplesServicePaginationReq`](QCSamplesServicePaginationReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`QCSamplesServicePaginationReq`](QCSamplesServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QCSamplesServicePaginationReq`](QCSamplesServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`QCSamplesServicePaginationReq`](QCSamplesServicePaginationReq.md) \| `PlainMessage`\<[`QCSamplesServicePaginationReq`](QCSamplesServicePaginationReq.md)\> |
| `b` | `undefined` \| [`QCSamplesServicePaginationReq`](QCSamplesServicePaginationReq.md) \| `PlainMessage`\<[`QCSamplesServicePaginationReq`](QCSamplesServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/qc_samples.scailo_pb.ts:987](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L987)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QCSamplesServicePaginationReq`](QCSamplesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QCSamplesServicePaginationReq`](QCSamplesServicePaginationReq.md)

#### Defined in

[src/qc_samples.scailo_pb.ts:975](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L975)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QCSamplesServicePaginationReq`](QCSamplesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCSamplesServicePaginationReq`](QCSamplesServicePaginationReq.md)

#### Defined in

[src/qc_samples.scailo_pb.ts:979](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L979)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QCSamplesServicePaginationReq`](QCSamplesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCSamplesServicePaginationReq`](QCSamplesServicePaginationReq.md)

#### Defined in

[src/qc_samples.scailo_pb.ts:983](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L983)
