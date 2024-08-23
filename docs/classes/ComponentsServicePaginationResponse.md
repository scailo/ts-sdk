[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / ComponentsServicePaginationResponse

# Class: ComponentsServicePaginationResponse

Describes the response to a pagination request

**`Generated`**

from message Scailo.ComponentsServicePaginationResponse

## Hierarchy

- `Message`\<[`ComponentsServicePaginationResponse`](ComponentsServicePaginationResponse.md)\>

  ↳ **`ComponentsServicePaginationResponse`**

## Table of contents

### Constructors

- [constructor](ComponentsServicePaginationResponse.md#constructor)

### Properties

- [count](ComponentsServicePaginationResponse.md#count)
- [offset](ComponentsServicePaginationResponse.md#offset)
- [payload](ComponentsServicePaginationResponse.md#payload)
- [total](ComponentsServicePaginationResponse.md#total)
- [fields](ComponentsServicePaginationResponse.md#fields)
- [runtime](ComponentsServicePaginationResponse.md#runtime)
- [typeName](ComponentsServicePaginationResponse.md#typename)

### Methods

- [clone](ComponentsServicePaginationResponse.md#clone)
- [equals](ComponentsServicePaginationResponse.md#equals)
- [fromBinary](ComponentsServicePaginationResponse.md#frombinary)
- [fromJson](ComponentsServicePaginationResponse.md#fromjson)
- [fromJsonString](ComponentsServicePaginationResponse.md#fromjsonstring)
- [getType](ComponentsServicePaginationResponse.md#gettype)
- [toBinary](ComponentsServicePaginationResponse.md#tobinary)
- [toJSON](ComponentsServicePaginationResponse.md#tojson)
- [toJson](ComponentsServicePaginationResponse.md#tojson-1)
- [toJsonString](ComponentsServicePaginationResponse.md#tojsonstring)
- [equals](ComponentsServicePaginationResponse.md#equals-1)
- [fromBinary](ComponentsServicePaginationResponse.md#frombinary-1)
- [fromJson](ComponentsServicePaginationResponse.md#fromjson-1)
- [fromJsonString](ComponentsServicePaginationResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new ComponentsServicePaginationResponse**(`data?`): [`ComponentsServicePaginationResponse`](ComponentsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ComponentsServicePaginationResponse`](ComponentsServicePaginationResponse.md)\> |

#### Returns

[`ComponentsServicePaginationResponse`](ComponentsServicePaginationResponse.md)

#### Overrides

Message\&lt;ComponentsServicePaginationResponse\&gt;.constructor

#### Defined in

src/components.scailo_pb.ts:900

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: uint64 count = 1;

#### Defined in

src/components.scailo_pb.ts:877

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: uint64 offset = 2;

#### Defined in

src/components.scailo_pb.ts:884

___

### payload

• **payload**: [`Component`](Component.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Scailo.Component payload = 4;

#### Defined in

src/components.scailo_pb.ts:898

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: uint64 total = 3;

#### Defined in

src/components.scailo_pb.ts:891

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/components.scailo_pb.ts:907

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/components.scailo_pb.ts:905

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ComponentsServicePaginationResponse"``

#### Defined in

src/components.scailo_pb.ts:906

## Methods

### clone

▸ **clone**(): [`ComponentsServicePaginationResponse`](ComponentsServicePaginationResponse.md)

Create a deep copy.

#### Returns

[`ComponentsServicePaginationResponse`](ComponentsServicePaginationResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`ComponentsServicePaginationResponse`](ComponentsServicePaginationResponse.md) \| `PlainMessage`\<[`ComponentsServicePaginationResponse`](ComponentsServicePaginationResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`ComponentsServicePaginationResponse`](ComponentsServicePaginationResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ComponentsServicePaginationResponse`](ComponentsServicePaginationResponse.md)\>

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
| `a` | `undefined` \| [`ComponentsServicePaginationResponse`](ComponentsServicePaginationResponse.md) \| `PlainMessage`\<[`ComponentsServicePaginationResponse`](ComponentsServicePaginationResponse.md)\> |
| `b` | `undefined` \| [`ComponentsServicePaginationResponse`](ComponentsServicePaginationResponse.md) \| `PlainMessage`\<[`ComponentsServicePaginationResponse`](ComponentsServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Defined in

src/components.scailo_pb.ts:926

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ComponentsServicePaginationResponse`](ComponentsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ComponentsServicePaginationResponse`](ComponentsServicePaginationResponse.md)

#### Defined in

src/components.scailo_pb.ts:914

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ComponentsServicePaginationResponse`](ComponentsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ComponentsServicePaginationResponse`](ComponentsServicePaginationResponse.md)

#### Defined in

src/components.scailo_pb.ts:918

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ComponentsServicePaginationResponse`](ComponentsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ComponentsServicePaginationResponse`](ComponentsServicePaginationResponse.md)

#### Defined in

src/components.scailo_pb.ts:922
