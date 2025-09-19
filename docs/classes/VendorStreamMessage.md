[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VendorStreamMessage

# Class: VendorStreamMessage

Describes the parameters that constitute a message associated to an vendor stream

**`Generated`**

from message Scailo.VendorStreamMessage

## Hierarchy

- `Message`\<[`VendorStreamMessage`](VendorStreamMessage.md)\>

  ↳ **`VendorStreamMessage`**

## Table of contents

### Constructors

- [constructor](VendorStreamMessage.md#constructor)

### Properties

- [content](VendorStreamMessage.md#content)
- [entityUuid](VendorStreamMessage.md#entityuuid)
- [internalRef](VendorStreamMessage.md#internalref)
- [isRead](VendorStreamMessage.md#isread)
- [messageType](VendorStreamMessage.md#messagetype)
- [metadata](VendorStreamMessage.md#metadata)
- [responseToMessageUuid](VendorStreamMessage.md#responsetomessageuuid)
- [vendorStreamId](VendorStreamMessage.md#vendorstreamid)
- [fields](VendorStreamMessage.md#fields)
- [runtime](VendorStreamMessage.md#runtime)
- [typeName](VendorStreamMessage.md#typename)

### Methods

- [clone](VendorStreamMessage.md#clone)
- [equals](VendorStreamMessage.md#equals)
- [fromBinary](VendorStreamMessage.md#frombinary)
- [fromJson](VendorStreamMessage.md#fromjson)
- [fromJsonString](VendorStreamMessage.md#fromjsonstring)
- [getType](VendorStreamMessage.md#gettype)
- [toBinary](VendorStreamMessage.md#tobinary)
- [toJSON](VendorStreamMessage.md#tojson)
- [toJson](VendorStreamMessage.md#tojson-1)
- [toJsonString](VendorStreamMessage.md#tojsonstring)
- [equals](VendorStreamMessage.md#equals-1)
- [fromBinary](VendorStreamMessage.md#frombinary-1)
- [fromJson](VendorStreamMessage.md#fromjson-1)
- [fromJsonString](VendorStreamMessage.md#fromjsonstring-1)

## Constructors

### constructor

• **new VendorStreamMessage**(`data?`): [`VendorStreamMessage`](VendorStreamMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VendorStreamMessage`](VendorStreamMessage.md)\> |

#### Returns

[`VendorStreamMessage`](VendorStreamMessage.md)

#### Overrides

Message\&lt;VendorStreamMessage\&gt;.constructor

#### Defined in

[src/vendor_streams.scailo_pb.ts:1511](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_streams.scailo_pb.ts#L1511)

## Properties

### content

• **content**: `string` = `""`

The content of the message

**`Generated`**

from field: string content = 20;

#### Defined in

[src/vendor_streams.scailo_pb.ts:1495](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_streams.scailo_pb.ts#L1495)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/vendor_streams.scailo_pb.ts:1460](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_streams.scailo_pb.ts#L1460)

___

### internalRef

• **internalRef**: `string` = `""`

Stores the internal reference that is automatically generated

**`Generated`**

from field: string internal_ref = 50;

#### Defined in

[src/vendor_streams.scailo_pb.ts:1502](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_streams.scailo_pb.ts#L1502)

___

### isRead

• **isRead**: `boolean` = `false`

Stores if the message has been read by the user

**`Generated`**

from field: bool is_read = 60;

#### Defined in

[src/vendor_streams.scailo_pb.ts:1509](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_streams.scailo_pb.ts#L1509)

___

### messageType

• **messageType**: [`VENDOR_STREAM_MESSAGE_TYPE`](../enums/VENDOR_STREAM_MESSAGE_TYPE.md) = `VENDOR_STREAM_MESSAGE_TYPE.VENDOR_STREAM_MESSAGE_TYPE_ANY_UNSPECIFIED`

The type of the message

**`Generated`**

from field: Scailo.VENDOR_STREAM_MESSAGE_TYPE message_type = 8;

#### Defined in

[src/vendor_streams.scailo_pb.ts:1474](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_streams.scailo_pb.ts#L1474)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this vendor stream

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/vendor_streams.scailo_pb.ts:1467](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_streams.scailo_pb.ts#L1467)

___

### responseToMessageUuid

• **responseToMessageUuid**: `string` = `""`

Stores the optional UUID of the message that this message is a response to

**`Generated`**

from field: string response_to_message_uuid = 11;

#### Defined in

[src/vendor_streams.scailo_pb.ts:1488](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_streams.scailo_pb.ts#L1488)

___

### vendorStreamId

• **vendorStreamId**: `bigint` = `protoInt64.zero`

Stores the vendor stream ID

**`Generated`**

from field: uint64 vendor_stream_id = 10;

#### Defined in

[src/vendor_streams.scailo_pb.ts:1481](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_streams.scailo_pb.ts#L1481)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/vendor_streams.scailo_pb.ts:1518](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_streams.scailo_pb.ts#L1518)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/vendor_streams.scailo_pb.ts:1516](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_streams.scailo_pb.ts#L1516)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VendorStreamMessage"``

#### Defined in

[src/vendor_streams.scailo_pb.ts:1517](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_streams.scailo_pb.ts#L1517)

## Methods

### clone

▸ **clone**(): [`VendorStreamMessage`](VendorStreamMessage.md)

Create a deep copy.

#### Returns

[`VendorStreamMessage`](VendorStreamMessage.md)

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
| `other` | `undefined` \| ``null`` \| [`VendorStreamMessage`](VendorStreamMessage.md) \| `PlainMessage`\<[`VendorStreamMessage`](VendorStreamMessage.md)\> |

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

▸ **getType**(): `MessageType`\<[`VendorStreamMessage`](VendorStreamMessage.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VendorStreamMessage`](VendorStreamMessage.md)\>

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
| `a` | `undefined` \| [`VendorStreamMessage`](VendorStreamMessage.md) \| `PlainMessage`\<[`VendorStreamMessage`](VendorStreamMessage.md)\> |
| `b` | `undefined` \| [`VendorStreamMessage`](VendorStreamMessage.md) \| `PlainMessage`\<[`VendorStreamMessage`](VendorStreamMessage.md)\> |

#### Returns

`boolean`

#### Defined in

[src/vendor_streams.scailo_pb.ts:1541](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_streams.scailo_pb.ts#L1541)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VendorStreamMessage`](VendorStreamMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VendorStreamMessage`](VendorStreamMessage.md)

#### Defined in

[src/vendor_streams.scailo_pb.ts:1529](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_streams.scailo_pb.ts#L1529)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VendorStreamMessage`](VendorStreamMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorStreamMessage`](VendorStreamMessage.md)

#### Defined in

[src/vendor_streams.scailo_pb.ts:1533](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_streams.scailo_pb.ts#L1533)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VendorStreamMessage`](VendorStreamMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorStreamMessage`](VendorStreamMessage.md)

#### Defined in

[src/vendor_streams.scailo_pb.ts:1537](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_streams.scailo_pb.ts#L1537)
