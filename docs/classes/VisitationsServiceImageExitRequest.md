[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VisitationsServiceImageExitRequest

# Class: VisitationsServiceImageExitRequest

Describes the message payload that is necessary to create an exit record. This will most likely be called only from mobile devices.

**`Generated`**

from message Scailo.VisitationsServiceImageExitRequest

## Hierarchy

- `Message`\<[`VisitationsServiceImageExitRequest`](VisitationsServiceImageExitRequest.md)\>

  ↳ **`VisitationsServiceImageExitRequest`**

## Table of contents

### Constructors

- [constructor](VisitationsServiceImageExitRequest.md#constructor)

### Properties

- [exitImage](VisitationsServiceImageExitRequest.md#exitimage)
- [exitImageMimeType](VisitationsServiceImageExitRequest.md#exitimagemimetype)
- [exitLatitude](VisitationsServiceImageExitRequest.md#exitlatitude)
- [exitLongitude](VisitationsServiceImageExitRequest.md#exitlongitude)
- [id](VisitationsServiceImageExitRequest.md#id)
- [fields](VisitationsServiceImageExitRequest.md#fields)
- [runtime](VisitationsServiceImageExitRequest.md#runtime)
- [typeName](VisitationsServiceImageExitRequest.md#typename)

### Methods

- [clone](VisitationsServiceImageExitRequest.md#clone)
- [equals](VisitationsServiceImageExitRequest.md#equals)
- [fromBinary](VisitationsServiceImageExitRequest.md#frombinary)
- [fromJson](VisitationsServiceImageExitRequest.md#fromjson)
- [fromJsonString](VisitationsServiceImageExitRequest.md#fromjsonstring)
- [getType](VisitationsServiceImageExitRequest.md#gettype)
- [toBinary](VisitationsServiceImageExitRequest.md#tobinary)
- [toJSON](VisitationsServiceImageExitRequest.md#tojson)
- [toJson](VisitationsServiceImageExitRequest.md#tojson-1)
- [toJsonString](VisitationsServiceImageExitRequest.md#tojsonstring)
- [equals](VisitationsServiceImageExitRequest.md#equals-1)
- [fromBinary](VisitationsServiceImageExitRequest.md#frombinary-1)
- [fromJson](VisitationsServiceImageExitRequest.md#fromjson-1)
- [fromJsonString](VisitationsServiceImageExitRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new VisitationsServiceImageExitRequest**(`data?`): [`VisitationsServiceImageExitRequest`](VisitationsServiceImageExitRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VisitationsServiceImageExitRequest`](VisitationsServiceImageExitRequest.md)\> |

#### Returns

[`VisitationsServiceImageExitRequest`](VisitationsServiceImageExitRequest.md)

#### Overrides

Message\&lt;VisitationsServiceImageExitRequest\&gt;.constructor

#### Defined in

[src/visitations.scailo_pb.ts:490](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/visitations.scailo_pb.ts#L490)

## Properties

### exitImage

• **exitImage**: `Uint8Array`

The raw image content of the exit image

**`Generated`**

from field: bytes exit_image = 13;

#### Defined in

[src/visitations.scailo_pb.ts:467](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/visitations.scailo_pb.ts#L467)

___

### exitImageMimeType

• **exitImageMimeType**: `string` = `""`

The MIME type of the exit image

**`Generated`**

from field: string exit_image_mime_type = 14;

#### Defined in

[src/visitations.scailo_pb.ts:474](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/visitations.scailo_pb.ts#L474)

___

### exitLatitude

• **exitLatitude**: `number` = `0`

The latitude of where the exit was recorded

**`Generated`**

from field: double exit_latitude = 15;

#### Defined in

[src/visitations.scailo_pb.ts:481](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/visitations.scailo_pb.ts#L481)

___

### exitLongitude

• **exitLongitude**: `number` = `0`

The longiture of where the exit was recorded

**`Generated`**

from field: double exit_longitude = 16;

#### Defined in

[src/visitations.scailo_pb.ts:488](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/visitations.scailo_pb.ts#L488)

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/visitations.scailo_pb.ts:460](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/visitations.scailo_pb.ts#L460)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/visitations.scailo_pb.ts:497](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/visitations.scailo_pb.ts#L497)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/visitations.scailo_pb.ts:495](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/visitations.scailo_pb.ts#L495)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VisitationsServiceImageExitRequest"``

#### Defined in

[src/visitations.scailo_pb.ts:496](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/visitations.scailo_pb.ts#L496)

## Methods

### clone

▸ **clone**(): [`VisitationsServiceImageExitRequest`](VisitationsServiceImageExitRequest.md)

Create a deep copy.

#### Returns

[`VisitationsServiceImageExitRequest`](VisitationsServiceImageExitRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`VisitationsServiceImageExitRequest`](VisitationsServiceImageExitRequest.md) \| `PlainMessage`\<[`VisitationsServiceImageExitRequest`](VisitationsServiceImageExitRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`VisitationsServiceImageExitRequest`](VisitationsServiceImageExitRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VisitationsServiceImageExitRequest`](VisitationsServiceImageExitRequest.md)\>

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
| `a` | `undefined` \| [`VisitationsServiceImageExitRequest`](VisitationsServiceImageExitRequest.md) \| `PlainMessage`\<[`VisitationsServiceImageExitRequest`](VisitationsServiceImageExitRequest.md)\> |
| `b` | `undefined` \| [`VisitationsServiceImageExitRequest`](VisitationsServiceImageExitRequest.md) \| `PlainMessage`\<[`VisitationsServiceImageExitRequest`](VisitationsServiceImageExitRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/visitations.scailo_pb.ts:517](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/visitations.scailo_pb.ts#L517)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VisitationsServiceImageExitRequest`](VisitationsServiceImageExitRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VisitationsServiceImageExitRequest`](VisitationsServiceImageExitRequest.md)

#### Defined in

[src/visitations.scailo_pb.ts:505](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/visitations.scailo_pb.ts#L505)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VisitationsServiceImageExitRequest`](VisitationsServiceImageExitRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VisitationsServiceImageExitRequest`](VisitationsServiceImageExitRequest.md)

#### Defined in

[src/visitations.scailo_pb.ts:509](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/visitations.scailo_pb.ts#L509)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VisitationsServiceImageExitRequest`](VisitationsServiceImageExitRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VisitationsServiceImageExitRequest`](VisitationsServiceImageExitRequest.md)

#### Defined in

[src/visitations.scailo_pb.ts:513](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/visitations.scailo_pb.ts#L513)
