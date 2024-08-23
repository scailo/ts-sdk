[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / StockReturnsServiceCreateRequest

# Class: StockReturnsServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Scailo.StockReturnsServiceCreateRequest

## Hierarchy

- `Message`\<[`StockReturnsServiceCreateRequest`](StockReturnsServiceCreateRequest.md)\>

  ↳ **`StockReturnsServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](StockReturnsServiceCreateRequest.md#constructor)

### Properties

- [entityUuid](StockReturnsServiceCreateRequest.md#entityuuid)
- [formData](StockReturnsServiceCreateRequest.md#formdata)
- [locationId](StockReturnsServiceCreateRequest.md#locationid)
- [refFrom](StockReturnsServiceCreateRequest.md#reffrom)
- [refId](StockReturnsServiceCreateRequest.md#refid)
- [referenceId](StockReturnsServiceCreateRequest.md#referenceid)
- [userComment](StockReturnsServiceCreateRequest.md#usercomment)
- [vaultFolderId](StockReturnsServiceCreateRequest.md#vaultfolderid)
- [fields](StockReturnsServiceCreateRequest.md#fields)
- [runtime](StockReturnsServiceCreateRequest.md#runtime)
- [typeName](StockReturnsServiceCreateRequest.md#typename)

### Methods

- [clone](StockReturnsServiceCreateRequest.md#clone)
- [equals](StockReturnsServiceCreateRequest.md#equals)
- [fromBinary](StockReturnsServiceCreateRequest.md#frombinary)
- [fromJson](StockReturnsServiceCreateRequest.md#fromjson)
- [fromJsonString](StockReturnsServiceCreateRequest.md#fromjsonstring)
- [getType](StockReturnsServiceCreateRequest.md#gettype)
- [toBinary](StockReturnsServiceCreateRequest.md#tobinary)
- [toJSON](StockReturnsServiceCreateRequest.md#tojson)
- [toJson](StockReturnsServiceCreateRequest.md#tojson-1)
- [toJsonString](StockReturnsServiceCreateRequest.md#tojsonstring)
- [equals](StockReturnsServiceCreateRequest.md#equals-1)
- [fromBinary](StockReturnsServiceCreateRequest.md#frombinary-1)
- [fromJson](StockReturnsServiceCreateRequest.md#fromjson-1)
- [fromJsonString](StockReturnsServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new StockReturnsServiceCreateRequest**(`data?`): [`StockReturnsServiceCreateRequest`](StockReturnsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`StockReturnsServiceCreateRequest`](StockReturnsServiceCreateRequest.md)\> |

#### Returns

[`StockReturnsServiceCreateRequest`](StockReturnsServiceCreateRequest.md)

#### Overrides

Message\&lt;StockReturnsServiceCreateRequest\&gt;.constructor

#### Defined in

src/stock_returns.scailo_pb.ts:267

## Properties

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/stock_returns.scailo_pb.ts:216

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

src/stock_returns.scailo_pb.ts:265

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The location ID of where the record is created

**`Generated`**

from field: uint64 location_id = 15;

#### Defined in

src/stock_returns.scailo_pb.ts:258

___

### refFrom

• **refFrom**: `string` = `""`

The associated reference

**`Generated`**

from field: string ref_from = 12;

#### Defined in

src/stock_returns.scailo_pb.ts:244

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 13;

#### Defined in

src/stock_returns.scailo_pb.ts:251

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the stock return

**`Generated`**

from field: string reference_id = 10;

#### Defined in

src/stock_returns.scailo_pb.ts:237

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

src/stock_returns.scailo_pb.ts:223

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

src/stock_returns.scailo_pb.ts:230

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/stock_returns.scailo_pb.ts:274

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/stock_returns.scailo_pb.ts:272

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.StockReturnsServiceCreateRequest"``

#### Defined in

src/stock_returns.scailo_pb.ts:273

## Methods

### clone

▸ **clone**(): [`StockReturnsServiceCreateRequest`](StockReturnsServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`StockReturnsServiceCreateRequest`](StockReturnsServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`StockReturnsServiceCreateRequest`](StockReturnsServiceCreateRequest.md) \| `PlainMessage`\<[`StockReturnsServiceCreateRequest`](StockReturnsServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`StockReturnsServiceCreateRequest`](StockReturnsServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`StockReturnsServiceCreateRequest`](StockReturnsServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`StockReturnsServiceCreateRequest`](StockReturnsServiceCreateRequest.md) \| `PlainMessage`\<[`StockReturnsServiceCreateRequest`](StockReturnsServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`StockReturnsServiceCreateRequest`](StockReturnsServiceCreateRequest.md) \| `PlainMessage`\<[`StockReturnsServiceCreateRequest`](StockReturnsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/stock_returns.scailo_pb.ts:297

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`StockReturnsServiceCreateRequest`](StockReturnsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`StockReturnsServiceCreateRequest`](StockReturnsServiceCreateRequest.md)

#### Defined in

src/stock_returns.scailo_pb.ts:285

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`StockReturnsServiceCreateRequest`](StockReturnsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StockReturnsServiceCreateRequest`](StockReturnsServiceCreateRequest.md)

#### Defined in

src/stock_returns.scailo_pb.ts:289

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`StockReturnsServiceCreateRequest`](StockReturnsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StockReturnsServiceCreateRequest`](StockReturnsServiceCreateRequest.md)

#### Defined in

src/stock_returns.scailo_pb.ts:293
