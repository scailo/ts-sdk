[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VendorsServiceUpdateRequest

# Class: VendorsServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Scailo.VendorsServiceUpdateRequest

## Hierarchy

- `Message`\<[`VendorsServiceUpdateRequest`](VendorsServiceUpdateRequest.md)\>

  ↳ **`VendorsServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](VendorsServiceUpdateRequest.md#constructor)

### Properties

- [code](VendorsServiceUpdateRequest.md#code)
- [email](VendorsServiceUpdateRequest.md#email)
- [formData](VendorsServiceUpdateRequest.md#formdata)
- [id](VendorsServiceUpdateRequest.md#id)
- [name](VendorsServiceUpdateRequest.md#name)
- [notifyUsers](VendorsServiceUpdateRequest.md#notifyusers)
- [phone](VendorsServiceUpdateRequest.md#phone)
- [userComment](VendorsServiceUpdateRequest.md#usercomment)
- [vaultFolderId](VendorsServiceUpdateRequest.md#vaultfolderid)
- [fields](VendorsServiceUpdateRequest.md#fields)
- [runtime](VendorsServiceUpdateRequest.md#runtime)
- [typeName](VendorsServiceUpdateRequest.md#typename)

### Methods

- [clone](VendorsServiceUpdateRequest.md#clone)
- [equals](VendorsServiceUpdateRequest.md#equals)
- [fromBinary](VendorsServiceUpdateRequest.md#frombinary)
- [fromJson](VendorsServiceUpdateRequest.md#fromjson)
- [fromJsonString](VendorsServiceUpdateRequest.md#fromjsonstring)
- [getType](VendorsServiceUpdateRequest.md#gettype)
- [toBinary](VendorsServiceUpdateRequest.md#tobinary)
- [toJSON](VendorsServiceUpdateRequest.md#tojson)
- [toJson](VendorsServiceUpdateRequest.md#tojson-1)
- [toJsonString](VendorsServiceUpdateRequest.md#tojsonstring)
- [equals](VendorsServiceUpdateRequest.md#equals-1)
- [fromBinary](VendorsServiceUpdateRequest.md#frombinary-1)
- [fromJson](VendorsServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](VendorsServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new VendorsServiceUpdateRequest**(`data?`): [`VendorsServiceUpdateRequest`](VendorsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VendorsServiceUpdateRequest`](VendorsServiceUpdateRequest.md)\> |

#### Returns

[`VendorsServiceUpdateRequest`](VendorsServiceUpdateRequest.md)

#### Overrides

Message\&lt;VendorsServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/vendors.scailo_pb.ts:498](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L498)

## Properties

### code

• **code**: `string` = `""`

The unique code by which the vendor is classified

**`Generated`**

from field: string code = 11;

#### Defined in

[src/vendors.scailo_pb.ts:475](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L475)

___

### email

• **email**: `string` = `""`

The primary email of the vendor

**`Generated`**

from field: string email = 12;

#### Defined in

[src/vendors.scailo_pb.ts:482](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L482)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/vendors.scailo_pb.ts:496](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L496)

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/vendors.scailo_pb.ts:447](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L447)

___

### name

• **name**: `string` = `""`

The name of the vendor

**`Generated`**

from field: string name = 10;

#### Defined in

[src/vendors.scailo_pb.ts:468](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L468)

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

Optional boolean value that stores if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

[src/vendors.scailo_pb.ts:454](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L454)

___

### phone

• **phone**: `string` = `""`

The primary contact number of the vendor

**`Generated`**

from field: string phone = 13;

#### Defined in

[src/vendors.scailo_pb.ts:489](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L489)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/vendors.scailo_pb.ts:440](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L440)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

[src/vendors.scailo_pb.ts:461](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L461)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/vendors.scailo_pb.ts:505](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L505)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/vendors.scailo_pb.ts:503](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L503)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VendorsServiceUpdateRequest"``

#### Defined in

[src/vendors.scailo_pb.ts:504](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L504)

## Methods

### clone

▸ **clone**(): [`VendorsServiceUpdateRequest`](VendorsServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`VendorsServiceUpdateRequest`](VendorsServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`VendorsServiceUpdateRequest`](VendorsServiceUpdateRequest.md) \| `PlainMessage`\<[`VendorsServiceUpdateRequest`](VendorsServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`VendorsServiceUpdateRequest`](VendorsServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VendorsServiceUpdateRequest`](VendorsServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`VendorsServiceUpdateRequest`](VendorsServiceUpdateRequest.md) \| `PlainMessage`\<[`VendorsServiceUpdateRequest`](VendorsServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`VendorsServiceUpdateRequest`](VendorsServiceUpdateRequest.md) \| `PlainMessage`\<[`VendorsServiceUpdateRequest`](VendorsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/vendors.scailo_pb.ts:529](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L529)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VendorsServiceUpdateRequest`](VendorsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VendorsServiceUpdateRequest`](VendorsServiceUpdateRequest.md)

#### Defined in

[src/vendors.scailo_pb.ts:517](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L517)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VendorsServiceUpdateRequest`](VendorsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorsServiceUpdateRequest`](VendorsServiceUpdateRequest.md)

#### Defined in

[src/vendors.scailo_pb.ts:521](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L521)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VendorsServiceUpdateRequest`](VendorsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorsServiceUpdateRequest`](VendorsServiceUpdateRequest.md)

#### Defined in

[src/vendors.scailo_pb.ts:525](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L525)
