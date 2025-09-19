[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesReturnsServiceUpdateRequest

# Class: SalesReturnsServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Scailo.SalesReturnsServiceUpdateRequest

## Hierarchy

- `Message`\<[`SalesReturnsServiceUpdateRequest`](SalesReturnsServiceUpdateRequest.md)\>

  ↳ **`SalesReturnsServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](SalesReturnsServiceUpdateRequest.md#constructor)

### Properties

- [formData](SalesReturnsServiceUpdateRequest.md#formdata)
- [id](SalesReturnsServiceUpdateRequest.md#id)
- [notifyUsers](SalesReturnsServiceUpdateRequest.md#notifyusers)
- [referenceId](SalesReturnsServiceUpdateRequest.md#referenceid)
- [userComment](SalesReturnsServiceUpdateRequest.md#usercomment)
- [vaultFolderId](SalesReturnsServiceUpdateRequest.md#vaultfolderid)
- [fields](SalesReturnsServiceUpdateRequest.md#fields)
- [runtime](SalesReturnsServiceUpdateRequest.md#runtime)
- [typeName](SalesReturnsServiceUpdateRequest.md#typename)

### Methods

- [clone](SalesReturnsServiceUpdateRequest.md#clone)
- [equals](SalesReturnsServiceUpdateRequest.md#equals)
- [fromBinary](SalesReturnsServiceUpdateRequest.md#frombinary)
- [fromJson](SalesReturnsServiceUpdateRequest.md#fromjson)
- [fromJsonString](SalesReturnsServiceUpdateRequest.md#fromjsonstring)
- [getType](SalesReturnsServiceUpdateRequest.md#gettype)
- [toBinary](SalesReturnsServiceUpdateRequest.md#tobinary)
- [toJSON](SalesReturnsServiceUpdateRequest.md#tojson)
- [toJson](SalesReturnsServiceUpdateRequest.md#tojson-1)
- [toJsonString](SalesReturnsServiceUpdateRequest.md#tojsonstring)
- [equals](SalesReturnsServiceUpdateRequest.md#equals-1)
- [fromBinary](SalesReturnsServiceUpdateRequest.md#frombinary-1)
- [fromJson](SalesReturnsServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](SalesReturnsServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesReturnsServiceUpdateRequest**(`data?`): [`SalesReturnsServiceUpdateRequest`](SalesReturnsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesReturnsServiceUpdateRequest`](SalesReturnsServiceUpdateRequest.md)\> |

#### Returns

[`SalesReturnsServiceUpdateRequest`](SalesReturnsServiceUpdateRequest.md)

#### Overrides

Message\&lt;SalesReturnsServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/sales_returns.scailo_pb.ts:429](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_returns.scailo_pb.ts#L429)

## Properties

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/sales_returns.scailo_pb.ts:427](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_returns.scailo_pb.ts#L427)

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/sales_returns.scailo_pb.ts:399](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_returns.scailo_pb.ts#L399)

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

Optional boolean value that stores if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

[src/sales_returns.scailo_pb.ts:406](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_returns.scailo_pb.ts#L406)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the sales return

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/sales_returns.scailo_pb.ts:420](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_returns.scailo_pb.ts#L420)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/sales_returns.scailo_pb.ts:392](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_returns.scailo_pb.ts#L392)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

[src/sales_returns.scailo_pb.ts:413](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_returns.scailo_pb.ts#L413)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_returns.scailo_pb.ts:436](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_returns.scailo_pb.ts#L436)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_returns.scailo_pb.ts:434](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_returns.scailo_pb.ts#L434)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesReturnsServiceUpdateRequest"``

#### Defined in

[src/sales_returns.scailo_pb.ts:435](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_returns.scailo_pb.ts#L435)

## Methods

### clone

▸ **clone**(): [`SalesReturnsServiceUpdateRequest`](SalesReturnsServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`SalesReturnsServiceUpdateRequest`](SalesReturnsServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesReturnsServiceUpdateRequest`](SalesReturnsServiceUpdateRequest.md) \| `PlainMessage`\<[`SalesReturnsServiceUpdateRequest`](SalesReturnsServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesReturnsServiceUpdateRequest`](SalesReturnsServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesReturnsServiceUpdateRequest`](SalesReturnsServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`SalesReturnsServiceUpdateRequest`](SalesReturnsServiceUpdateRequest.md) \| `PlainMessage`\<[`SalesReturnsServiceUpdateRequest`](SalesReturnsServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`SalesReturnsServiceUpdateRequest`](SalesReturnsServiceUpdateRequest.md) \| `PlainMessage`\<[`SalesReturnsServiceUpdateRequest`](SalesReturnsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_returns.scailo_pb.ts:457](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_returns.scailo_pb.ts#L457)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesReturnsServiceUpdateRequest`](SalesReturnsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesReturnsServiceUpdateRequest`](SalesReturnsServiceUpdateRequest.md)

#### Defined in

[src/sales_returns.scailo_pb.ts:445](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_returns.scailo_pb.ts#L445)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesReturnsServiceUpdateRequest`](SalesReturnsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesReturnsServiceUpdateRequest`](SalesReturnsServiceUpdateRequest.md)

#### Defined in

[src/sales_returns.scailo_pb.ts:449](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_returns.scailo_pb.ts#L449)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesReturnsServiceUpdateRequest`](SalesReturnsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesReturnsServiceUpdateRequest`](SalesReturnsServiceUpdateRequest.md)

#### Defined in

[src/sales_returns.scailo_pb.ts:453](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_returns.scailo_pb.ts#L453)
