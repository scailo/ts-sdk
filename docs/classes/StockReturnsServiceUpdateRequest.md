[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / StockReturnsServiceUpdateRequest

# Class: StockReturnsServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Scailo.StockReturnsServiceUpdateRequest

## Hierarchy

- `Message`\<[`StockReturnsServiceUpdateRequest`](StockReturnsServiceUpdateRequest.md)\>

  ↳ **`StockReturnsServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](StockReturnsServiceUpdateRequest.md#constructor)

### Properties

- [formData](StockReturnsServiceUpdateRequest.md#formdata)
- [id](StockReturnsServiceUpdateRequest.md#id)
- [notifyUsers](StockReturnsServiceUpdateRequest.md#notifyusers)
- [referenceId](StockReturnsServiceUpdateRequest.md#referenceid)
- [userComment](StockReturnsServiceUpdateRequest.md#usercomment)
- [vaultFolderId](StockReturnsServiceUpdateRequest.md#vaultfolderid)
- [fields](StockReturnsServiceUpdateRequest.md#fields)
- [runtime](StockReturnsServiceUpdateRequest.md#runtime)
- [typeName](StockReturnsServiceUpdateRequest.md#typename)

### Methods

- [clone](StockReturnsServiceUpdateRequest.md#clone)
- [equals](StockReturnsServiceUpdateRequest.md#equals)
- [fromBinary](StockReturnsServiceUpdateRequest.md#frombinary)
- [fromJson](StockReturnsServiceUpdateRequest.md#fromjson)
- [fromJsonString](StockReturnsServiceUpdateRequest.md#fromjsonstring)
- [getType](StockReturnsServiceUpdateRequest.md#gettype)
- [toBinary](StockReturnsServiceUpdateRequest.md#tobinary)
- [toJSON](StockReturnsServiceUpdateRequest.md#tojson)
- [toJson](StockReturnsServiceUpdateRequest.md#tojson-1)
- [toJsonString](StockReturnsServiceUpdateRequest.md#tojsonstring)
- [equals](StockReturnsServiceUpdateRequest.md#equals-1)
- [fromBinary](StockReturnsServiceUpdateRequest.md#frombinary-1)
- [fromJson](StockReturnsServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](StockReturnsServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new StockReturnsServiceUpdateRequest**(`data?`): [`StockReturnsServiceUpdateRequest`](StockReturnsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`StockReturnsServiceUpdateRequest`](StockReturnsServiceUpdateRequest.md)\> |

#### Returns

[`StockReturnsServiceUpdateRequest`](StockReturnsServiceUpdateRequest.md)

#### Overrides

Message\&lt;StockReturnsServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/stock_returns.scailo_pb.ts:428](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/stock_returns.scailo_pb.ts#L428)

## Properties

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/stock_returns.scailo_pb.ts:426](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/stock_returns.scailo_pb.ts#L426)

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/stock_returns.scailo_pb.ts:375](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/stock_returns.scailo_pb.ts#L375)

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

**`Optional`**

**`Description`**

Flag to trigger system notifications to relevant users upon update. Set to true if subsequent workflows (like verification) depend on this change.

**`Example`**

```ts
true
```

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

[src/stock_returns.scailo_pb.ts:387](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/stock_returns.scailo_pb.ts#L387)

___

### referenceId

• **referenceId**: `string` = `""`

**`Mandatory`**

**`Description`**

Updated alphanumeric reference ID. Must contain at least 1 character.

**`Example`**

```ts
"ABS-2023-001-REV"
```

**`Regex`**

"[0-9A-Za-z ]+$"

**`Format`**

Alphanumeric characters and spaces only. No special symbols or punctuation allowed.

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/stock_returns.scailo_pb.ts:419](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/stock_returns.scailo_pb.ts#L419)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/stock_returns.scailo_pb.ts:368](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/stock_returns.scailo_pb.ts#L368)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Updated vault folder ID for documentation storage.

**`Example`**

```ts
15235
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

[src/stock_returns.scailo_pb.ts:403](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/stock_returns.scailo_pb.ts#L403)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/stock_returns.scailo_pb.ts:435](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/stock_returns.scailo_pb.ts#L435)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/stock_returns.scailo_pb.ts:433](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/stock_returns.scailo_pb.ts#L433)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.StockReturnsServiceUpdateRequest"``

#### Defined in

[src/stock_returns.scailo_pb.ts:434](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/stock_returns.scailo_pb.ts#L434)

## Methods

### clone

▸ **clone**(): [`StockReturnsServiceUpdateRequest`](StockReturnsServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`StockReturnsServiceUpdateRequest`](StockReturnsServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`StockReturnsServiceUpdateRequest`](StockReturnsServiceUpdateRequest.md) \| `PlainMessage`\<[`StockReturnsServiceUpdateRequest`](StockReturnsServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`StockReturnsServiceUpdateRequest`](StockReturnsServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`StockReturnsServiceUpdateRequest`](StockReturnsServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`StockReturnsServiceUpdateRequest`](StockReturnsServiceUpdateRequest.md) \| `PlainMessage`\<[`StockReturnsServiceUpdateRequest`](StockReturnsServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`StockReturnsServiceUpdateRequest`](StockReturnsServiceUpdateRequest.md) \| `PlainMessage`\<[`StockReturnsServiceUpdateRequest`](StockReturnsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/stock_returns.scailo_pb.ts:456](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/stock_returns.scailo_pb.ts#L456)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`StockReturnsServiceUpdateRequest`](StockReturnsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`StockReturnsServiceUpdateRequest`](StockReturnsServiceUpdateRequest.md)

#### Defined in

[src/stock_returns.scailo_pb.ts:444](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/stock_returns.scailo_pb.ts#L444)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`StockReturnsServiceUpdateRequest`](StockReturnsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StockReturnsServiceUpdateRequest`](StockReturnsServiceUpdateRequest.md)

#### Defined in

[src/stock_returns.scailo_pb.ts:448](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/stock_returns.scailo_pb.ts#L448)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`StockReturnsServiceUpdateRequest`](StockReturnsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StockReturnsServiceUpdateRequest`](StockReturnsServiceUpdateRequest.md)

#### Defined in

[src/stock_returns.scailo_pb.ts:452](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/stock_returns.scailo_pb.ts#L452)
