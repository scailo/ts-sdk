[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / LabelsServiceFilterReq

# Class: LabelsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.LabelsServiceFilterReq

## Hierarchy

- `Message`\<[`LabelsServiceFilterReq`](LabelsServiceFilterReq.md)\>

  ↳ **`LabelsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](LabelsServiceFilterReq.md#constructor)

### Properties

- [code](LabelsServiceFilterReq.md#code)
- [count](LabelsServiceFilterReq.md#count)
- [creationTimestampEnd](LabelsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](LabelsServiceFilterReq.md#creationtimestampstart)
- [entityUuid](LabelsServiceFilterReq.md#entityuuid)
- [isActive](LabelsServiceFilterReq.md#isactive)
- [modificationTimestampEnd](LabelsServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](LabelsServiceFilterReq.md#modificationtimestampstart)
- [name](LabelsServiceFilterReq.md#name)
- [offset](LabelsServiceFilterReq.md#offset)
- [sortKey](LabelsServiceFilterReq.md#sortkey)
- [sortOrder](LabelsServiceFilterReq.md#sortorder)
- [fields](LabelsServiceFilterReq.md#fields)
- [runtime](LabelsServiceFilterReq.md#runtime)
- [typeName](LabelsServiceFilterReq.md#typename)

### Methods

- [clone](LabelsServiceFilterReq.md#clone)
- [equals](LabelsServiceFilterReq.md#equals)
- [fromBinary](LabelsServiceFilterReq.md#frombinary)
- [fromJson](LabelsServiceFilterReq.md#fromjson)
- [fromJsonString](LabelsServiceFilterReq.md#fromjsonstring)
- [getType](LabelsServiceFilterReq.md#gettype)
- [toBinary](LabelsServiceFilterReq.md#tobinary)
- [toJSON](LabelsServiceFilterReq.md#tojson)
- [toJson](LabelsServiceFilterReq.md#tojson-1)
- [toJsonString](LabelsServiceFilterReq.md#tojsonstring)
- [equals](LabelsServiceFilterReq.md#equals-1)
- [fromBinary](LabelsServiceFilterReq.md#frombinary-1)
- [fromJson](LabelsServiceFilterReq.md#fromjson-1)
- [fromJsonString](LabelsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new LabelsServiceFilterReq**(`data?`): [`LabelsServiceFilterReq`](LabelsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`LabelsServiceFilterReq`](LabelsServiceFilterReq.md)\> |

#### Returns

[`LabelsServiceFilterReq`](LabelsServiceFilterReq.md)

#### Overrides

Message\&lt;LabelsServiceFilterReq\&gt;.constructor

#### Defined in

[src/labels.scailo_pb.ts:556](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/labels.scailo_pb.ts#L556)

## Properties

### code

• **code**: `string` = `""`

The unique code by which the label is classified

**`Generated`**

from field: string code = 21;

#### Defined in

[src/labels.scailo_pb.ts:554](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/labels.scailo_pb.ts#L554)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/labels.scailo_pb.ts:484](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/labels.scailo_pb.ts#L484)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

[src/labels.scailo_pb.ts:519](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/labels.scailo_pb.ts#L519)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

[src/labels.scailo_pb.ts:512](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/labels.scailo_pb.ts#L512)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/labels.scailo_pb.ts:540](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/labels.scailo_pb.ts#L540)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/labels.scailo_pb.ts:477](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/labels.scailo_pb.ts#L477)

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

[src/labels.scailo_pb.ts:533](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/labels.scailo_pb.ts#L533)

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

[src/labels.scailo_pb.ts:526](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/labels.scailo_pb.ts#L526)

___

### name

• **name**: `string` = `""`

The name of the label

**`Generated`**

from field: string name = 10;

#### Defined in

[src/labels.scailo_pb.ts:547](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/labels.scailo_pb.ts#L547)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

[src/labels.scailo_pb.ts:491](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/labels.scailo_pb.ts#L491)

___

### sortKey

• **sortKey**: [`LABEL_SORT_KEY`](../enums/LABEL_SORT_KEY.md) = `LABEL_SORT_KEY.LABEL_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.LABEL_SORT_KEY sort_key = 5;

#### Defined in

[src/labels.scailo_pb.ts:505](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/labels.scailo_pb.ts#L505)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/labels.scailo_pb.ts:498](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/labels.scailo_pb.ts#L498)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/labels.scailo_pb.ts:563](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/labels.scailo_pb.ts#L563)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/labels.scailo_pb.ts:561](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/labels.scailo_pb.ts#L561)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.LabelsServiceFilterReq"``

#### Defined in

[src/labels.scailo_pb.ts:562](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/labels.scailo_pb.ts#L562)

## Methods

### clone

▸ **clone**(): [`LabelsServiceFilterReq`](LabelsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`LabelsServiceFilterReq`](LabelsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`LabelsServiceFilterReq`](LabelsServiceFilterReq.md) \| `PlainMessage`\<[`LabelsServiceFilterReq`](LabelsServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`LabelsServiceFilterReq`](LabelsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`LabelsServiceFilterReq`](LabelsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`LabelsServiceFilterReq`](LabelsServiceFilterReq.md) \| `PlainMessage`\<[`LabelsServiceFilterReq`](LabelsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`LabelsServiceFilterReq`](LabelsServiceFilterReq.md) \| `PlainMessage`\<[`LabelsServiceFilterReq`](LabelsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/labels.scailo_pb.ts:590](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/labels.scailo_pb.ts#L590)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LabelsServiceFilterReq`](LabelsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`LabelsServiceFilterReq`](LabelsServiceFilterReq.md)

#### Defined in

[src/labels.scailo_pb.ts:578](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/labels.scailo_pb.ts#L578)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LabelsServiceFilterReq`](LabelsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LabelsServiceFilterReq`](LabelsServiceFilterReq.md)

#### Defined in

[src/labels.scailo_pb.ts:582](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/labels.scailo_pb.ts#L582)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LabelsServiceFilterReq`](LabelsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LabelsServiceFilterReq`](LabelsServiceFilterReq.md)

#### Defined in

[src/labels.scailo_pb.ts:586](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/labels.scailo_pb.ts#L586)
