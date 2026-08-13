[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VendorStream

# Class: VendorStream

Describes the parameters that are part of a standard response

**`Generated`**

from message Scailo.VendorStream

## Hierarchy

- `Message`\<[`VendorStream`](VendorStream.md)\>

  ↳ **`VendorStream`**

## Table of contents

### Constructors

- [constructor](VendorStream.md#constructor)

### Properties

- [completedOn](VendorStream.md#completedon)
- [entityUuid](VendorStream.md#entityuuid)
- [internalRef](VendorStream.md#internalref)
- [lastMessageBy](VendorStream.md#lastmessageby)
- [logs](VendorStream.md#logs)
- [messageCount](VendorStream.md#messagecount)
- [metadata](VendorStream.md#metadata)
- [refFrom](VendorStream.md#reffrom)
- [refId](VendorStream.md#refid)
- [refUuid](VendorStream.md#refuuid)
- [status](VendorStream.md#status)
- [title](VendorStream.md#title)
- [unreadCount](VendorStream.md#unreadcount)
- [vaultFolderId](VendorStream.md#vaultfolderid)
- [vaultFolderUuid](VendorStream.md#vaultfolderuuid)
- [vendorId](VendorStream.md#vendorid)
- [fields](VendorStream.md#fields)
- [runtime](VendorStream.md#runtime)
- [typeName](VendorStream.md#typename)

### Methods

- [clone](VendorStream.md#clone)
- [equals](VendorStream.md#equals)
- [fromBinary](VendorStream.md#frombinary)
- [fromJson](VendorStream.md#fromjson)
- [fromJsonString](VendorStream.md#fromjsonstring)
- [getType](VendorStream.md#gettype)
- [toBinary](VendorStream.md#tobinary)
- [toJSON](VendorStream.md#tojson)
- [toJson](VendorStream.md#tojson-1)
- [toJsonString](VendorStream.md#tojsonstring)
- [equals](VendorStream.md#equals-1)
- [fromBinary](VendorStream.md#frombinary-1)
- [fromJson](VendorStream.md#fromjson-1)
- [fromJsonString](VendorStream.md#fromjsonstring-1)

## Constructors

### constructor

• **new VendorStream**(`data?`): [`VendorStream`](VendorStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VendorStream`](VendorStream.md)\> |

#### Returns

[`VendorStream`](VendorStream.md)

#### Overrides

Message\&lt;VendorStream\&gt;.constructor

#### Defined in

[src/vendor_streams.scailo_pb.ts:706](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendor_streams.scailo_pb.ts#L706)

## Properties

### completedOn

• **completedOn**: `bigint` = `protoInt64.zero`

The timestamp of when this vendor stream was marked as completed

**`Generated`**

from field: uint64 completed_on = 6;

#### Defined in

[src/vendor_streams.scailo_pb.ts:627](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendor_streams.scailo_pb.ts#L627)

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

[src/vendor_streams.scailo_pb.ts:599](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendor_streams.scailo_pb.ts#L599)

___

### internalRef

• **internalRef**: `string` = `""`

Stores the internal reference that is automatically generated

**`Generated`**

from field: string internal_ref = 50;

#### Defined in

[src/vendor_streams.scailo_pb.ts:683](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendor_streams.scailo_pb.ts#L683)

___

### lastMessageBy

• **lastMessageBy**: `string` = `""`

Stores the username of the user who added the last message

**`Generated`**

from field: string last_message_by = 62;

#### Defined in

[src/vendor_streams.scailo_pb.ts:704](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendor_streams.scailo_pb.ts#L704)

___

### logs

• **logs**: [`LogbookLogVendorStreamLC`](LogbookLogVendorStreamLC.md)[] = `[]`

Stores the logs of every operation performed on this vendor stream

**`Generated`**

from field: repeated Scailo.LogbookLogVendorStreamLC logs = 5;

#### Defined in

[src/vendor_streams.scailo_pb.ts:620](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendor_streams.scailo_pb.ts#L620)

___

### messageCount

• **messageCount**: `bigint` = `protoInt64.zero`

Stores the total number of messages in the stream

**`Generated`**

from field: uint64 message_count = 61;

#### Defined in

[src/vendor_streams.scailo_pb.ts:697](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendor_streams.scailo_pb.ts#L697)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this vendor stream

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/vendor_streams.scailo_pb.ts:606](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendor_streams.scailo_pb.ts#L606)

___

### refFrom

• **refFrom**: [`VENDOR_STREAM_REF_FROM`](../enums/VENDOR_STREAM_REF_FROM.md) = `VENDOR_STREAM_REF_FROM.VENDOR_STREAM_REF_FROM_ANY_UNSPECIFIED`

The associated reference

**`Generated`**

from field: Scailo.VENDOR_STREAM_REF_FROM ref_from = 12;

#### Defined in

[src/vendor_streams.scailo_pb.ts:662](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendor_streams.scailo_pb.ts#L662)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated reference ID

**`Generated`**

from field: uint64 ref_id = 13;

#### Defined in

[src/vendor_streams.scailo_pb.ts:669](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendor_streams.scailo_pb.ts#L669)

___

### refUuid

• **refUuid**: `string` = `""`

The associated reference UUID

**`Generated`**

from field: string ref_uuid = 14;

#### Defined in

[src/vendor_streams.scailo_pb.ts:676](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendor_streams.scailo_pb.ts#L676)

___

### status

• **status**: [`VENDOR_STREAM_LIFECYCLE`](../enums/VENDOR_STREAM_LIFECYCLE.md) = `VENDOR_STREAM_LIFECYCLE.VENDOR_STREAM_LIFECYCLE_ANY_UNSPECIFIED`

The status of this vendor stream

**`Generated`**

from field: Scailo.VENDOR_STREAM_LIFECYCLE status = 4;

#### Defined in

[src/vendor_streams.scailo_pb.ts:613](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendor_streams.scailo_pb.ts#L613)

___

### title

• **title**: `string` = `""`

The title of the vendor stream

**`Generated`**

from field: string title = 10;

#### Defined in

[src/vendor_streams.scailo_pb.ts:648](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendor_streams.scailo_pb.ts#L648)

___

### unreadCount

• **unreadCount**: `bigint` = `protoInt64.zero`

Stores the number of unread messages in this stream for the specific user (on the basis of the auth token)

**`Generated`**

from field: uint64 unread_count = 60;

#### Defined in

[src/vendor_streams.scailo_pb.ts:690](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendor_streams.scailo_pb.ts#L690)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 7;

#### Defined in

[src/vendor_streams.scailo_pb.ts:634](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendor_streams.scailo_pb.ts#L634)

___

### vaultFolderUuid

• **vaultFolderUuid**: `string` = `""`

The associated vault folder UUID (will be empty if vault_folder_id is 0)

**`Generated`**

from field: string vault_folder_uuid = 107;

#### Defined in

[src/vendor_streams.scailo_pb.ts:641](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendor_streams.scailo_pb.ts#L641)

___

### vendorId

• **vendorId**: `bigint` = `protoInt64.zero`

The ID of the vendor

**`Generated`**

from field: uint64 vendor_id = 11;

#### Defined in

[src/vendor_streams.scailo_pb.ts:655](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendor_streams.scailo_pb.ts#L655)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/vendor_streams.scailo_pb.ts:713](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendor_streams.scailo_pb.ts#L713)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/vendor_streams.scailo_pb.ts:711](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendor_streams.scailo_pb.ts#L711)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VendorStream"``

#### Defined in

[src/vendor_streams.scailo_pb.ts:712](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendor_streams.scailo_pb.ts#L712)

## Methods

### clone

▸ **clone**(): [`VendorStream`](VendorStream.md)

Create a deep copy.

#### Returns

[`VendorStream`](VendorStream.md)

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
| `other` | `undefined` \| ``null`` \| [`VendorStream`](VendorStream.md) \| `PlainMessage`\<[`VendorStream`](VendorStream.md)\> |

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

▸ **getType**(): `MessageType`\<[`VendorStream`](VendorStream.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VendorStream`](VendorStream.md)\>

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
| `a` | `undefined` \| [`VendorStream`](VendorStream.md) \| `PlainMessage`\<[`VendorStream`](VendorStream.md)\> |
| `b` | `undefined` \| [`VendorStream`](VendorStream.md) \| `PlainMessage`\<[`VendorStream`](VendorStream.md)\> |

#### Returns

`boolean`

#### Defined in

[src/vendor_streams.scailo_pb.ts:744](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendor_streams.scailo_pb.ts#L744)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VendorStream`](VendorStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VendorStream`](VendorStream.md)

#### Defined in

[src/vendor_streams.scailo_pb.ts:732](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendor_streams.scailo_pb.ts#L732)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VendorStream`](VendorStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorStream`](VendorStream.md)

#### Defined in

[src/vendor_streams.scailo_pb.ts:736](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendor_streams.scailo_pb.ts#L736)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VendorStream`](VendorStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorStream`](VendorStream.md)

#### Defined in

[src/vendor_streams.scailo_pb.ts:740](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendor_streams.scailo_pb.ts#L740)
