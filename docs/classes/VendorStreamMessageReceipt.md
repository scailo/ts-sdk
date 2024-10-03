[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VendorStreamMessageReceipt

# Class: VendorStreamMessageReceipt

Describes the parameters that constitute a message receipt

**`Generated`**

from message Scailo.VendorStreamMessageReceipt

## Hierarchy

- `Message`\<[`VendorStreamMessageReceipt`](VendorStreamMessageReceipt.md)\>

  ↳ **`VendorStreamMessageReceipt`**

## Table of contents

### Constructors

- [constructor](VendorStreamMessageReceipt.md#constructor)

### Properties

- [entityUuid](VendorStreamMessageReceipt.md#entityuuid)
- [isRead](VendorStreamMessageReceipt.md#isread)
- [metadata](VendorStreamMessageReceipt.md#metadata)
- [readAt](VendorStreamMessageReceipt.md#readat)
- [userId](VendorStreamMessageReceipt.md#userid)
- [vendorStreamMessageUuid](VendorStreamMessageReceipt.md#vendorstreammessageuuid)
- [fields](VendorStreamMessageReceipt.md#fields)
- [runtime](VendorStreamMessageReceipt.md#runtime)
- [typeName](VendorStreamMessageReceipt.md#typename)

### Methods

- [clone](VendorStreamMessageReceipt.md#clone)
- [equals](VendorStreamMessageReceipt.md#equals)
- [fromBinary](VendorStreamMessageReceipt.md#frombinary)
- [fromJson](VendorStreamMessageReceipt.md#fromjson)
- [fromJsonString](VendorStreamMessageReceipt.md#fromjsonstring)
- [getType](VendorStreamMessageReceipt.md#gettype)
- [toBinary](VendorStreamMessageReceipt.md#tobinary)
- [toJSON](VendorStreamMessageReceipt.md#tojson)
- [toJson](VendorStreamMessageReceipt.md#tojson-1)
- [toJsonString](VendorStreamMessageReceipt.md#tojsonstring)
- [equals](VendorStreamMessageReceipt.md#equals-1)
- [fromBinary](VendorStreamMessageReceipt.md#frombinary-1)
- [fromJson](VendorStreamMessageReceipt.md#fromjson-1)
- [fromJsonString](VendorStreamMessageReceipt.md#fromjsonstring-1)

## Constructors

### constructor

• **new VendorStreamMessageReceipt**(`data?`): [`VendorStreamMessageReceipt`](VendorStreamMessageReceipt.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VendorStreamMessageReceipt`](VendorStreamMessageReceipt.md)\> |

#### Returns

[`VendorStreamMessageReceipt`](VendorStreamMessageReceipt.md)

#### Overrides

Message\&lt;VendorStreamMessageReceipt\&gt;.constructor

#### Defined in

src/vendor_streams.scailo_pb.ts:1809

## Properties

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/vendor_streams.scailo_pb.ts:1772

___

### isRead

• **isRead**: `boolean` = `false`

Stores if the message has been read by the user

**`Generated`**

from field: bool is_read = 12;

#### Defined in

src/vendor_streams.scailo_pb.ts:1800

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this vendor stream

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/vendor_streams.scailo_pb.ts:1779

___

### readAt

• **readAt**: `bigint` = `protoInt64.zero`

Stores the timestamp of when the message was read

**`Generated`**

from field: uint64 read_at = 13;

#### Defined in

src/vendor_streams.scailo_pb.ts:1807

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The ID of the user who read this

**`Generated`**

from field: uint64 user_id = 11;

#### Defined in

src/vendor_streams.scailo_pb.ts:1793

___

### vendorStreamMessageUuid

• **vendorStreamMessageUuid**: `string` = `""`

Stores the vendor stream message UUID

**`Generated`**

from field: string vendor_stream_message_uuid = 10;

#### Defined in

src/vendor_streams.scailo_pb.ts:1786

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/vendor_streams.scailo_pb.ts:1816

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/vendor_streams.scailo_pb.ts:1814

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VendorStreamMessageReceipt"``

#### Defined in

src/vendor_streams.scailo_pb.ts:1815

## Methods

### clone

▸ **clone**(): [`VendorStreamMessageReceipt`](VendorStreamMessageReceipt.md)

Create a deep copy.

#### Returns

[`VendorStreamMessageReceipt`](VendorStreamMessageReceipt.md)

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
| `other` | `undefined` \| ``null`` \| [`VendorStreamMessageReceipt`](VendorStreamMessageReceipt.md) \| `PlainMessage`\<[`VendorStreamMessageReceipt`](VendorStreamMessageReceipt.md)\> |

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

▸ **getType**(): `MessageType`\<[`VendorStreamMessageReceipt`](VendorStreamMessageReceipt.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VendorStreamMessageReceipt`](VendorStreamMessageReceipt.md)\>

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
| `a` | `undefined` \| [`VendorStreamMessageReceipt`](VendorStreamMessageReceipt.md) \| `PlainMessage`\<[`VendorStreamMessageReceipt`](VendorStreamMessageReceipt.md)\> |
| `b` | `undefined` \| [`VendorStreamMessageReceipt`](VendorStreamMessageReceipt.md) \| `PlainMessage`\<[`VendorStreamMessageReceipt`](VendorStreamMessageReceipt.md)\> |

#### Returns

`boolean`

#### Defined in

src/vendor_streams.scailo_pb.ts:1837

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VendorStreamMessageReceipt`](VendorStreamMessageReceipt.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VendorStreamMessageReceipt`](VendorStreamMessageReceipt.md)

#### Defined in

src/vendor_streams.scailo_pb.ts:1825

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VendorStreamMessageReceipt`](VendorStreamMessageReceipt.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorStreamMessageReceipt`](VendorStreamMessageReceipt.md)

#### Defined in

src/vendor_streams.scailo_pb.ts:1829

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VendorStreamMessageReceipt`](VendorStreamMessageReceipt.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorStreamMessageReceipt`](VendorStreamMessageReceipt.md)

#### Defined in

src/vendor_streams.scailo_pb.ts:1833
