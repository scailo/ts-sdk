[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VendorStreamsServiceInternalSubscriberCreateRequest

# Class: VendorStreamsServiceInternalSubscriberCreateRequest

Describes the parameters necessary to create an internal subscriber

**`Generated`**

from message Scailo.VendorStreamsServiceInternalSubscriberCreateRequest

## Hierarchy

- `Message`\<[`VendorStreamsServiceInternalSubscriberCreateRequest`](VendorStreamsServiceInternalSubscriberCreateRequest.md)\>

  ↳ **`VendorStreamsServiceInternalSubscriberCreateRequest`**

## Table of contents

### Constructors

- [constructor](VendorStreamsServiceInternalSubscriberCreateRequest.md#constructor)

### Properties

- [userComment](VendorStreamsServiceInternalSubscriberCreateRequest.md#usercomment)
- [userId](VendorStreamsServiceInternalSubscriberCreateRequest.md#userid)
- [vendorStreamId](VendorStreamsServiceInternalSubscriberCreateRequest.md#vendorstreamid)
- [fields](VendorStreamsServiceInternalSubscriberCreateRequest.md#fields)
- [runtime](VendorStreamsServiceInternalSubscriberCreateRequest.md#runtime)
- [typeName](VendorStreamsServiceInternalSubscriberCreateRequest.md#typename)

### Methods

- [clone](VendorStreamsServiceInternalSubscriberCreateRequest.md#clone)
- [equals](VendorStreamsServiceInternalSubscriberCreateRequest.md#equals)
- [fromBinary](VendorStreamsServiceInternalSubscriberCreateRequest.md#frombinary)
- [fromJson](VendorStreamsServiceInternalSubscriberCreateRequest.md#fromjson)
- [fromJsonString](VendorStreamsServiceInternalSubscriberCreateRequest.md#fromjsonstring)
- [getType](VendorStreamsServiceInternalSubscriberCreateRequest.md#gettype)
- [toBinary](VendorStreamsServiceInternalSubscriberCreateRequest.md#tobinary)
- [toJSON](VendorStreamsServiceInternalSubscriberCreateRequest.md#tojson)
- [toJson](VendorStreamsServiceInternalSubscriberCreateRequest.md#tojson-1)
- [toJsonString](VendorStreamsServiceInternalSubscriberCreateRequest.md#tojsonstring)
- [equals](VendorStreamsServiceInternalSubscriberCreateRequest.md#equals-1)
- [fromBinary](VendorStreamsServiceInternalSubscriberCreateRequest.md#frombinary-1)
- [fromJson](VendorStreamsServiceInternalSubscriberCreateRequest.md#fromjson-1)
- [fromJsonString](VendorStreamsServiceInternalSubscriberCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new VendorStreamsServiceInternalSubscriberCreateRequest**(`data?`): [`VendorStreamsServiceInternalSubscriberCreateRequest`](VendorStreamsServiceInternalSubscriberCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VendorStreamsServiceInternalSubscriberCreateRequest`](VendorStreamsServiceInternalSubscriberCreateRequest.md)\> |

#### Returns

[`VendorStreamsServiceInternalSubscriberCreateRequest`](VendorStreamsServiceInternalSubscriberCreateRequest.md)

#### Overrides

Message\&lt;VendorStreamsServiceInternalSubscriberCreateRequest\&gt;.constructor

#### Defined in

[src/vendor_streams.scailo_pb.ts:1920](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_streams.scailo_pb.ts#L1920)

## Properties

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/vendor_streams.scailo_pb.ts:1904](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_streams.scailo_pb.ts#L1904)

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

Stores the user ID

**`Generated`**

from field: uint64 user_id = 11;

#### Defined in

[src/vendor_streams.scailo_pb.ts:1918](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_streams.scailo_pb.ts#L1918)

___

### vendorStreamId

• **vendorStreamId**: `bigint` = `protoInt64.zero`

Stores the vendor stream ID

**`Generated`**

from field: uint64 vendor_stream_id = 10;

#### Defined in

[src/vendor_streams.scailo_pb.ts:1911](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_streams.scailo_pb.ts#L1911)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/vendor_streams.scailo_pb.ts:1927](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_streams.scailo_pb.ts#L1927)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/vendor_streams.scailo_pb.ts:1925](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_streams.scailo_pb.ts#L1925)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VendorStreamsServiceInternalSubscriberCreateRequest"``

#### Defined in

[src/vendor_streams.scailo_pb.ts:1926](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_streams.scailo_pb.ts#L1926)

## Methods

### clone

▸ **clone**(): [`VendorStreamsServiceInternalSubscriberCreateRequest`](VendorStreamsServiceInternalSubscriberCreateRequest.md)

Create a deep copy.

#### Returns

[`VendorStreamsServiceInternalSubscriberCreateRequest`](VendorStreamsServiceInternalSubscriberCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`VendorStreamsServiceInternalSubscriberCreateRequest`](VendorStreamsServiceInternalSubscriberCreateRequest.md) \| `PlainMessage`\<[`VendorStreamsServiceInternalSubscriberCreateRequest`](VendorStreamsServiceInternalSubscriberCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`VendorStreamsServiceInternalSubscriberCreateRequest`](VendorStreamsServiceInternalSubscriberCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VendorStreamsServiceInternalSubscriberCreateRequest`](VendorStreamsServiceInternalSubscriberCreateRequest.md)\>

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
| `a` | `undefined` \| [`VendorStreamsServiceInternalSubscriberCreateRequest`](VendorStreamsServiceInternalSubscriberCreateRequest.md) \| `PlainMessage`\<[`VendorStreamsServiceInternalSubscriberCreateRequest`](VendorStreamsServiceInternalSubscriberCreateRequest.md)\> |
| `b` | `undefined` \| [`VendorStreamsServiceInternalSubscriberCreateRequest`](VendorStreamsServiceInternalSubscriberCreateRequest.md) \| `PlainMessage`\<[`VendorStreamsServiceInternalSubscriberCreateRequest`](VendorStreamsServiceInternalSubscriberCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/vendor_streams.scailo_pb.ts:1945](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_streams.scailo_pb.ts#L1945)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VendorStreamsServiceInternalSubscriberCreateRequest`](VendorStreamsServiceInternalSubscriberCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VendorStreamsServiceInternalSubscriberCreateRequest`](VendorStreamsServiceInternalSubscriberCreateRequest.md)

#### Defined in

[src/vendor_streams.scailo_pb.ts:1933](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_streams.scailo_pb.ts#L1933)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VendorStreamsServiceInternalSubscriberCreateRequest`](VendorStreamsServiceInternalSubscriberCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorStreamsServiceInternalSubscriberCreateRequest`](VendorStreamsServiceInternalSubscriberCreateRequest.md)

#### Defined in

[src/vendor_streams.scailo_pb.ts:1937](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_streams.scailo_pb.ts#L1937)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VendorStreamsServiceInternalSubscriberCreateRequest`](VendorStreamsServiceInternalSubscriberCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorStreamsServiceInternalSubscriberCreateRequest`](VendorStreamsServiceInternalSubscriberCreateRequest.md)

#### Defined in

[src/vendor_streams.scailo_pb.ts:1941](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_streams.scailo_pb.ts#L1941)
