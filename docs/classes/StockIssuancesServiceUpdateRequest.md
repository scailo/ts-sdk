[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / StockIssuancesServiceUpdateRequest

# Class: StockIssuancesServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Scailo.StockIssuancesServiceUpdateRequest

## Hierarchy

- `Message`\<[`StockIssuancesServiceUpdateRequest`](StockIssuancesServiceUpdateRequest.md)\>

  ↳ **`StockIssuancesServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](StockIssuancesServiceUpdateRequest.md#constructor)

### Properties

- [formData](StockIssuancesServiceUpdateRequest.md#formdata)
- [id](StockIssuancesServiceUpdateRequest.md#id)
- [notifyUsers](StockIssuancesServiceUpdateRequest.md#notifyusers)
- [referenceId](StockIssuancesServiceUpdateRequest.md#referenceid)
- [userComment](StockIssuancesServiceUpdateRequest.md#usercomment)
- [vaultFolderId](StockIssuancesServiceUpdateRequest.md#vaultfolderid)
- [fields](StockIssuancesServiceUpdateRequest.md#fields)
- [runtime](StockIssuancesServiceUpdateRequest.md#runtime)
- [typeName](StockIssuancesServiceUpdateRequest.md#typename)

### Methods

- [clone](StockIssuancesServiceUpdateRequest.md#clone)
- [equals](StockIssuancesServiceUpdateRequest.md#equals)
- [fromBinary](StockIssuancesServiceUpdateRequest.md#frombinary)
- [fromJson](StockIssuancesServiceUpdateRequest.md#fromjson)
- [fromJsonString](StockIssuancesServiceUpdateRequest.md#fromjsonstring)
- [getType](StockIssuancesServiceUpdateRequest.md#gettype)
- [toBinary](StockIssuancesServiceUpdateRequest.md#tobinary)
- [toJSON](StockIssuancesServiceUpdateRequest.md#tojson)
- [toJson](StockIssuancesServiceUpdateRequest.md#tojson-1)
- [toJsonString](StockIssuancesServiceUpdateRequest.md#tojsonstring)
- [equals](StockIssuancesServiceUpdateRequest.md#equals-1)
- [fromBinary](StockIssuancesServiceUpdateRequest.md#frombinary-1)
- [fromJson](StockIssuancesServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](StockIssuancesServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new StockIssuancesServiceUpdateRequest**(`data?`): [`StockIssuancesServiceUpdateRequest`](StockIssuancesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`StockIssuancesServiceUpdateRequest`](StockIssuancesServiceUpdateRequest.md)\> |

#### Returns

[`StockIssuancesServiceUpdateRequest`](StockIssuancesServiceUpdateRequest.md)

#### Overrides

Message\&lt;StockIssuancesServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/stock_issuances.scailo_pb.ts:386](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_issuances.scailo_pb.ts#L386)

## Properties

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/stock_issuances.scailo_pb.ts:384](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_issuances.scailo_pb.ts#L384)

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/stock_issuances.scailo_pb.ts:356](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_issuances.scailo_pb.ts#L356)

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

Optional boolean value that stores if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

[src/stock_issuances.scailo_pb.ts:363](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_issuances.scailo_pb.ts#L363)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the stock issuance

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/stock_issuances.scailo_pb.ts:377](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_issuances.scailo_pb.ts#L377)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/stock_issuances.scailo_pb.ts:349](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_issuances.scailo_pb.ts#L349)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

[src/stock_issuances.scailo_pb.ts:370](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_issuances.scailo_pb.ts#L370)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/stock_issuances.scailo_pb.ts:393](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_issuances.scailo_pb.ts#L393)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/stock_issuances.scailo_pb.ts:391](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_issuances.scailo_pb.ts#L391)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.StockIssuancesServiceUpdateRequest"``

#### Defined in

[src/stock_issuances.scailo_pb.ts:392](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_issuances.scailo_pb.ts#L392)

## Methods

### clone

▸ **clone**(): [`StockIssuancesServiceUpdateRequest`](StockIssuancesServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`StockIssuancesServiceUpdateRequest`](StockIssuancesServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`StockIssuancesServiceUpdateRequest`](StockIssuancesServiceUpdateRequest.md) \| `PlainMessage`\<[`StockIssuancesServiceUpdateRequest`](StockIssuancesServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`StockIssuancesServiceUpdateRequest`](StockIssuancesServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`StockIssuancesServiceUpdateRequest`](StockIssuancesServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`StockIssuancesServiceUpdateRequest`](StockIssuancesServiceUpdateRequest.md) \| `PlainMessage`\<[`StockIssuancesServiceUpdateRequest`](StockIssuancesServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`StockIssuancesServiceUpdateRequest`](StockIssuancesServiceUpdateRequest.md) \| `PlainMessage`\<[`StockIssuancesServiceUpdateRequest`](StockIssuancesServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/stock_issuances.scailo_pb.ts:414](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_issuances.scailo_pb.ts#L414)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`StockIssuancesServiceUpdateRequest`](StockIssuancesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`StockIssuancesServiceUpdateRequest`](StockIssuancesServiceUpdateRequest.md)

#### Defined in

[src/stock_issuances.scailo_pb.ts:402](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_issuances.scailo_pb.ts#L402)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`StockIssuancesServiceUpdateRequest`](StockIssuancesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StockIssuancesServiceUpdateRequest`](StockIssuancesServiceUpdateRequest.md)

#### Defined in

[src/stock_issuances.scailo_pb.ts:406](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_issuances.scailo_pb.ts#L406)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`StockIssuancesServiceUpdateRequest`](StockIssuancesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StockIssuancesServiceUpdateRequest`](StockIssuancesServiceUpdateRequest.md)

#### Defined in

[src/stock_issuances.scailo_pb.ts:410](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_issuances.scailo_pb.ts#L410)
