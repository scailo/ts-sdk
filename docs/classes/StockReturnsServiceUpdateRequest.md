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

src/stock_returns.scailo_pb.ts:378

## Properties

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

src/stock_returns.scailo_pb.ts:376

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

src/stock_returns.scailo_pb.ts:348

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

Optional boolean value that stores if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

src/stock_returns.scailo_pb.ts:355

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the stock return

**`Generated`**

from field: string reference_id = 10;

#### Defined in

src/stock_returns.scailo_pb.ts:369

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/stock_returns.scailo_pb.ts:341

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

src/stock_returns.scailo_pb.ts:362

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/stock_returns.scailo_pb.ts:385

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/stock_returns.scailo_pb.ts:383

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.StockReturnsServiceUpdateRequest"``

#### Defined in

src/stock_returns.scailo_pb.ts:384

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

src/stock_returns.scailo_pb.ts:406

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

src/stock_returns.scailo_pb.ts:394

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

src/stock_returns.scailo_pb.ts:398

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

src/stock_returns.scailo_pb.ts:402
