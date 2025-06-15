[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ActivitiesServicePaginatedActionsResponse

# Class: ActivitiesServicePaginatedActionsResponse

Describes the response to a pagination actions request

**`Generated`**

from message Scailo.ActivitiesServicePaginatedActionsResponse

## Hierarchy

- `Message`\<[`ActivitiesServicePaginatedActionsResponse`](ActivitiesServicePaginatedActionsResponse.md)\>

  ↳ **`ActivitiesServicePaginatedActionsResponse`**

## Table of contents

### Constructors

- [constructor](ActivitiesServicePaginatedActionsResponse.md#constructor)

### Properties

- [count](ActivitiesServicePaginatedActionsResponse.md#count)
- [offset](ActivitiesServicePaginatedActionsResponse.md#offset)
- [payload](ActivitiesServicePaginatedActionsResponse.md#payload)
- [total](ActivitiesServicePaginatedActionsResponse.md#total)
- [fields](ActivitiesServicePaginatedActionsResponse.md#fields)
- [runtime](ActivitiesServicePaginatedActionsResponse.md#runtime)
- [typeName](ActivitiesServicePaginatedActionsResponse.md#typename)

### Methods

- [clone](ActivitiesServicePaginatedActionsResponse.md#clone)
- [equals](ActivitiesServicePaginatedActionsResponse.md#equals)
- [fromBinary](ActivitiesServicePaginatedActionsResponse.md#frombinary)
- [fromJson](ActivitiesServicePaginatedActionsResponse.md#fromjson)
- [fromJsonString](ActivitiesServicePaginatedActionsResponse.md#fromjsonstring)
- [getType](ActivitiesServicePaginatedActionsResponse.md#gettype)
- [toBinary](ActivitiesServicePaginatedActionsResponse.md#tobinary)
- [toJSON](ActivitiesServicePaginatedActionsResponse.md#tojson)
- [toJson](ActivitiesServicePaginatedActionsResponse.md#tojson-1)
- [toJsonString](ActivitiesServicePaginatedActionsResponse.md#tojsonstring)
- [equals](ActivitiesServicePaginatedActionsResponse.md#equals-1)
- [fromBinary](ActivitiesServicePaginatedActionsResponse.md#frombinary-1)
- [fromJson](ActivitiesServicePaginatedActionsResponse.md#fromjson-1)
- [fromJsonString](ActivitiesServicePaginatedActionsResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new ActivitiesServicePaginatedActionsResponse**(`data?`): [`ActivitiesServicePaginatedActionsResponse`](ActivitiesServicePaginatedActionsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ActivitiesServicePaginatedActionsResponse`](ActivitiesServicePaginatedActionsResponse.md)\> |

#### Returns

[`ActivitiesServicePaginatedActionsResponse`](ActivitiesServicePaginatedActionsResponse.md)

#### Overrides

Message\&lt;ActivitiesServicePaginatedActionsResponse\&gt;.constructor

#### Defined in

src/activities.scailo_pb.ts:2222

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: uint64 count = 1;

#### Defined in

src/activities.scailo_pb.ts:2199

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: uint64 offset = 2;

#### Defined in

src/activities.scailo_pb.ts:2206

___

### payload

• **payload**: [`ActivityAction`](ActivityAction.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Scailo.ActivityAction payload = 4;

#### Defined in

src/activities.scailo_pb.ts:2220

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: uint64 total = 3;

#### Defined in

src/activities.scailo_pb.ts:2213

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/activities.scailo_pb.ts:2229

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/activities.scailo_pb.ts:2227

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ActivitiesServicePaginatedActionsResponse"``

#### Defined in

src/activities.scailo_pb.ts:2228

## Methods

### clone

▸ **clone**(): [`ActivitiesServicePaginatedActionsResponse`](ActivitiesServicePaginatedActionsResponse.md)

Create a deep copy.

#### Returns

[`ActivitiesServicePaginatedActionsResponse`](ActivitiesServicePaginatedActionsResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`ActivitiesServicePaginatedActionsResponse`](ActivitiesServicePaginatedActionsResponse.md) \| `PlainMessage`\<[`ActivitiesServicePaginatedActionsResponse`](ActivitiesServicePaginatedActionsResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`ActivitiesServicePaginatedActionsResponse`](ActivitiesServicePaginatedActionsResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ActivitiesServicePaginatedActionsResponse`](ActivitiesServicePaginatedActionsResponse.md)\>

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
| `a` | `undefined` \| [`ActivitiesServicePaginatedActionsResponse`](ActivitiesServicePaginatedActionsResponse.md) \| `PlainMessage`\<[`ActivitiesServicePaginatedActionsResponse`](ActivitiesServicePaginatedActionsResponse.md)\> |
| `b` | `undefined` \| [`ActivitiesServicePaginatedActionsResponse`](ActivitiesServicePaginatedActionsResponse.md) \| `PlainMessage`\<[`ActivitiesServicePaginatedActionsResponse`](ActivitiesServicePaginatedActionsResponse.md)\> |

#### Returns

`boolean`

#### Defined in

src/activities.scailo_pb.ts:2248

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ActivitiesServicePaginatedActionsResponse`](ActivitiesServicePaginatedActionsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ActivitiesServicePaginatedActionsResponse`](ActivitiesServicePaginatedActionsResponse.md)

#### Defined in

src/activities.scailo_pb.ts:2236

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ActivitiesServicePaginatedActionsResponse`](ActivitiesServicePaginatedActionsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivitiesServicePaginatedActionsResponse`](ActivitiesServicePaginatedActionsResponse.md)

#### Defined in

src/activities.scailo_pb.ts:2240

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ActivitiesServicePaginatedActionsResponse`](ActivitiesServicePaginatedActionsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivitiesServicePaginatedActionsResponse`](ActivitiesServicePaginatedActionsResponse.md)

#### Defined in

src/activities.scailo_pb.ts:2244
