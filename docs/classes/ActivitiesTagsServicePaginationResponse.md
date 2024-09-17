[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ActivitiesTagsServicePaginationResponse

# Class: ActivitiesTagsServicePaginationResponse

Describes the response to a pagination request

**`Generated`**

from message Scailo.ActivitiesTagsServicePaginationResponse

## Hierarchy

- `Message`\<[`ActivitiesTagsServicePaginationResponse`](ActivitiesTagsServicePaginationResponse.md)\>

  ↳ **`ActivitiesTagsServicePaginationResponse`**

## Table of contents

### Constructors

- [constructor](ActivitiesTagsServicePaginationResponse.md#constructor)

### Properties

- [count](ActivitiesTagsServicePaginationResponse.md#count)
- [offset](ActivitiesTagsServicePaginationResponse.md#offset)
- [payload](ActivitiesTagsServicePaginationResponse.md#payload)
- [total](ActivitiesTagsServicePaginationResponse.md#total)
- [fields](ActivitiesTagsServicePaginationResponse.md#fields)
- [runtime](ActivitiesTagsServicePaginationResponse.md#runtime)
- [typeName](ActivitiesTagsServicePaginationResponse.md#typename)

### Methods

- [clone](ActivitiesTagsServicePaginationResponse.md#clone)
- [equals](ActivitiesTagsServicePaginationResponse.md#equals)
- [fromBinary](ActivitiesTagsServicePaginationResponse.md#frombinary)
- [fromJson](ActivitiesTagsServicePaginationResponse.md#fromjson)
- [fromJsonString](ActivitiesTagsServicePaginationResponse.md#fromjsonstring)
- [getType](ActivitiesTagsServicePaginationResponse.md#gettype)
- [toBinary](ActivitiesTagsServicePaginationResponse.md#tobinary)
- [toJSON](ActivitiesTagsServicePaginationResponse.md#tojson)
- [toJson](ActivitiesTagsServicePaginationResponse.md#tojson-1)
- [toJsonString](ActivitiesTagsServicePaginationResponse.md#tojsonstring)
- [equals](ActivitiesTagsServicePaginationResponse.md#equals-1)
- [fromBinary](ActivitiesTagsServicePaginationResponse.md#frombinary-1)
- [fromJson](ActivitiesTagsServicePaginationResponse.md#fromjson-1)
- [fromJsonString](ActivitiesTagsServicePaginationResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new ActivitiesTagsServicePaginationResponse**(`data?`): [`ActivitiesTagsServicePaginationResponse`](ActivitiesTagsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ActivitiesTagsServicePaginationResponse`](ActivitiesTagsServicePaginationResponse.md)\> |

#### Returns

[`ActivitiesTagsServicePaginationResponse`](ActivitiesTagsServicePaginationResponse.md)

#### Overrides

Message\&lt;ActivitiesTagsServicePaginationResponse\&gt;.constructor

#### Defined in

src/activities_tags.scailo_pb.ts:570

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: uint64 count = 1;

#### Defined in

src/activities_tags.scailo_pb.ts:547

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: uint64 offset = 2;

#### Defined in

src/activities_tags.scailo_pb.ts:554

___

### payload

• **payload**: [`ActivityTag`](ActivityTag.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Scailo.ActivityTag payload = 4;

#### Defined in

src/activities_tags.scailo_pb.ts:568

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: uint64 total = 3;

#### Defined in

src/activities_tags.scailo_pb.ts:561

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/activities_tags.scailo_pb.ts:577

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/activities_tags.scailo_pb.ts:575

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ActivitiesTagsServicePaginationResponse"``

#### Defined in

src/activities_tags.scailo_pb.ts:576

## Methods

### clone

▸ **clone**(): [`ActivitiesTagsServicePaginationResponse`](ActivitiesTagsServicePaginationResponse.md)

Create a deep copy.

#### Returns

[`ActivitiesTagsServicePaginationResponse`](ActivitiesTagsServicePaginationResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`ActivitiesTagsServicePaginationResponse`](ActivitiesTagsServicePaginationResponse.md) \| `PlainMessage`\<[`ActivitiesTagsServicePaginationResponse`](ActivitiesTagsServicePaginationResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`ActivitiesTagsServicePaginationResponse`](ActivitiesTagsServicePaginationResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ActivitiesTagsServicePaginationResponse`](ActivitiesTagsServicePaginationResponse.md)\>

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
| `a` | `undefined` \| [`ActivitiesTagsServicePaginationResponse`](ActivitiesTagsServicePaginationResponse.md) \| `PlainMessage`\<[`ActivitiesTagsServicePaginationResponse`](ActivitiesTagsServicePaginationResponse.md)\> |
| `b` | `undefined` \| [`ActivitiesTagsServicePaginationResponse`](ActivitiesTagsServicePaginationResponse.md) \| `PlainMessage`\<[`ActivitiesTagsServicePaginationResponse`](ActivitiesTagsServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Defined in

src/activities_tags.scailo_pb.ts:596

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ActivitiesTagsServicePaginationResponse`](ActivitiesTagsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ActivitiesTagsServicePaginationResponse`](ActivitiesTagsServicePaginationResponse.md)

#### Defined in

src/activities_tags.scailo_pb.ts:584

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ActivitiesTagsServicePaginationResponse`](ActivitiesTagsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivitiesTagsServicePaginationResponse`](ActivitiesTagsServicePaginationResponse.md)

#### Defined in

src/activities_tags.scailo_pb.ts:588

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ActivitiesTagsServicePaginationResponse`](ActivitiesTagsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivitiesTagsServicePaginationResponse`](ActivitiesTagsServicePaginationResponse.md)

#### Defined in

src/activities_tags.scailo_pb.ts:592
