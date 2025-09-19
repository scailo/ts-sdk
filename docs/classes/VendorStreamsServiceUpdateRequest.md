[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VendorStreamsServiceUpdateRequest

# Class: VendorStreamsServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Scailo.VendorStreamsServiceUpdateRequest

## Hierarchy

- `Message`\<[`VendorStreamsServiceUpdateRequest`](VendorStreamsServiceUpdateRequest.md)\>

  ↳ **`VendorStreamsServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](VendorStreamsServiceUpdateRequest.md#constructor)

### Properties

- [id](VendorStreamsServiceUpdateRequest.md#id)
- [notifyUsers](VendorStreamsServiceUpdateRequest.md#notifyusers)
- [title](VendorStreamsServiceUpdateRequest.md#title)
- [userComment](VendorStreamsServiceUpdateRequest.md#usercomment)
- [vaultFolderId](VendorStreamsServiceUpdateRequest.md#vaultfolderid)
- [fields](VendorStreamsServiceUpdateRequest.md#fields)
- [runtime](VendorStreamsServiceUpdateRequest.md#runtime)
- [typeName](VendorStreamsServiceUpdateRequest.md#typename)

### Methods

- [clone](VendorStreamsServiceUpdateRequest.md#clone)
- [equals](VendorStreamsServiceUpdateRequest.md#equals)
- [fromBinary](VendorStreamsServiceUpdateRequest.md#frombinary)
- [fromJson](VendorStreamsServiceUpdateRequest.md#fromjson)
- [fromJsonString](VendorStreamsServiceUpdateRequest.md#fromjsonstring)
- [getType](VendorStreamsServiceUpdateRequest.md#gettype)
- [toBinary](VendorStreamsServiceUpdateRequest.md#tobinary)
- [toJSON](VendorStreamsServiceUpdateRequest.md#tojson)
- [toJson](VendorStreamsServiceUpdateRequest.md#tojson-1)
- [toJsonString](VendorStreamsServiceUpdateRequest.md#tojsonstring)
- [equals](VendorStreamsServiceUpdateRequest.md#equals-1)
- [fromBinary](VendorStreamsServiceUpdateRequest.md#frombinary-1)
- [fromJson](VendorStreamsServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](VendorStreamsServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new VendorStreamsServiceUpdateRequest**(`data?`): [`VendorStreamsServiceUpdateRequest`](VendorStreamsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VendorStreamsServiceUpdateRequest`](VendorStreamsServiceUpdateRequest.md)\> |

#### Returns

[`VendorStreamsServiceUpdateRequest`](VendorStreamsServiceUpdateRequest.md)

#### Overrides

Message\&lt;VendorStreamsServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/vendor_streams.scailo_pb.ts:511](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_streams.scailo_pb.ts#L511)

## Properties

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/vendor_streams.scailo_pb.ts:488](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_streams.scailo_pb.ts#L488)

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

Optional boolean value that stores if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

[src/vendor_streams.scailo_pb.ts:495](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_streams.scailo_pb.ts#L495)

___

### title

• **title**: `string` = `""`

The title of the vendor stream

**`Generated`**

from field: string title = 10;

#### Defined in

[src/vendor_streams.scailo_pb.ts:509](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_streams.scailo_pb.ts#L509)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/vendor_streams.scailo_pb.ts:481](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_streams.scailo_pb.ts#L481)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 7;

#### Defined in

[src/vendor_streams.scailo_pb.ts:502](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_streams.scailo_pb.ts#L502)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/vendor_streams.scailo_pb.ts:518](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_streams.scailo_pb.ts#L518)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/vendor_streams.scailo_pb.ts:516](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_streams.scailo_pb.ts#L516)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VendorStreamsServiceUpdateRequest"``

#### Defined in

[src/vendor_streams.scailo_pb.ts:517](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_streams.scailo_pb.ts#L517)

## Methods

### clone

▸ **clone**(): [`VendorStreamsServiceUpdateRequest`](VendorStreamsServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`VendorStreamsServiceUpdateRequest`](VendorStreamsServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`VendorStreamsServiceUpdateRequest`](VendorStreamsServiceUpdateRequest.md) \| `PlainMessage`\<[`VendorStreamsServiceUpdateRequest`](VendorStreamsServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`VendorStreamsServiceUpdateRequest`](VendorStreamsServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VendorStreamsServiceUpdateRequest`](VendorStreamsServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`VendorStreamsServiceUpdateRequest`](VendorStreamsServiceUpdateRequest.md) \| `PlainMessage`\<[`VendorStreamsServiceUpdateRequest`](VendorStreamsServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`VendorStreamsServiceUpdateRequest`](VendorStreamsServiceUpdateRequest.md) \| `PlainMessage`\<[`VendorStreamsServiceUpdateRequest`](VendorStreamsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/vendor_streams.scailo_pb.ts:538](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_streams.scailo_pb.ts#L538)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VendorStreamsServiceUpdateRequest`](VendorStreamsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VendorStreamsServiceUpdateRequest`](VendorStreamsServiceUpdateRequest.md)

#### Defined in

[src/vendor_streams.scailo_pb.ts:526](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_streams.scailo_pb.ts#L526)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VendorStreamsServiceUpdateRequest`](VendorStreamsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorStreamsServiceUpdateRequest`](VendorStreamsServiceUpdateRequest.md)

#### Defined in

[src/vendor_streams.scailo_pb.ts:530](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_streams.scailo_pb.ts#L530)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VendorStreamsServiceUpdateRequest`](VendorStreamsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorStreamsServiceUpdateRequest`](VendorStreamsServiceUpdateRequest.md)

#### Defined in

[src/vendor_streams.scailo_pb.ts:534](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_streams.scailo_pb.ts#L534)
