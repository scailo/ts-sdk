[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / StockIssuancesServiceCreateRequest

# Class: StockIssuancesServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Scailo.StockIssuancesServiceCreateRequest

## Hierarchy

- `Message`\<[`StockIssuancesServiceCreateRequest`](StockIssuancesServiceCreateRequest.md)\>

  ↳ **`StockIssuancesServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](StockIssuancesServiceCreateRequest.md#constructor)

### Properties

- [entityUuid](StockIssuancesServiceCreateRequest.md#entityuuid)
- [formData](StockIssuancesServiceCreateRequest.md#formdata)
- [refFrom](StockIssuancesServiceCreateRequest.md#reffrom)
- [refId](StockIssuancesServiceCreateRequest.md#refid)
- [referenceId](StockIssuancesServiceCreateRequest.md#referenceid)
- [userComment](StockIssuancesServiceCreateRequest.md#usercomment)
- [vaultFolderId](StockIssuancesServiceCreateRequest.md#vaultfolderid)
- [fields](StockIssuancesServiceCreateRequest.md#fields)
- [runtime](StockIssuancesServiceCreateRequest.md#runtime)
- [typeName](StockIssuancesServiceCreateRequest.md#typename)

### Methods

- [clone](StockIssuancesServiceCreateRequest.md#clone)
- [equals](StockIssuancesServiceCreateRequest.md#equals)
- [fromBinary](StockIssuancesServiceCreateRequest.md#frombinary)
- [fromJson](StockIssuancesServiceCreateRequest.md#fromjson)
- [fromJsonString](StockIssuancesServiceCreateRequest.md#fromjsonstring)
- [getType](StockIssuancesServiceCreateRequest.md#gettype)
- [toBinary](StockIssuancesServiceCreateRequest.md#tobinary)
- [toJSON](StockIssuancesServiceCreateRequest.md#tojson)
- [toJson](StockIssuancesServiceCreateRequest.md#tojson-1)
- [toJsonString](StockIssuancesServiceCreateRequest.md#tojsonstring)
- [equals](StockIssuancesServiceCreateRequest.md#equals-1)
- [fromBinary](StockIssuancesServiceCreateRequest.md#frombinary-1)
- [fromJson](StockIssuancesServiceCreateRequest.md#fromjson-1)
- [fromJsonString](StockIssuancesServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new StockIssuancesServiceCreateRequest**(`data?`): [`StockIssuancesServiceCreateRequest`](StockIssuancesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`StockIssuancesServiceCreateRequest`](StockIssuancesServiceCreateRequest.md)\> |

#### Returns

[`StockIssuancesServiceCreateRequest`](StockIssuancesServiceCreateRequest.md)

#### Overrides

Message\&lt;StockIssuancesServiceCreateRequest\&gt;.constructor

#### Defined in

src/stock_issuances.scailo_pb.ts:260

## Properties

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/stock_issuances.scailo_pb.ts:216

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

src/stock_issuances.scailo_pb.ts:258

___

### refFrom

• **refFrom**: `string` = `""`

The associated reference

**`Generated`**

from field: string ref_from = 12;

#### Defined in

src/stock_issuances.scailo_pb.ts:244

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 13;

#### Defined in

src/stock_issuances.scailo_pb.ts:251

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the stock issuance

**`Generated`**

from field: string reference_id = 10;

#### Defined in

src/stock_issuances.scailo_pb.ts:237

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

src/stock_issuances.scailo_pb.ts:223

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

src/stock_issuances.scailo_pb.ts:230

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/stock_issuances.scailo_pb.ts:267

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/stock_issuances.scailo_pb.ts:265

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.StockIssuancesServiceCreateRequest"``

#### Defined in

src/stock_issuances.scailo_pb.ts:266

## Methods

### clone

▸ **clone**(): [`StockIssuancesServiceCreateRequest`](StockIssuancesServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`StockIssuancesServiceCreateRequest`](StockIssuancesServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`StockIssuancesServiceCreateRequest`](StockIssuancesServiceCreateRequest.md) \| `PlainMessage`\<[`StockIssuancesServiceCreateRequest`](StockIssuancesServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`StockIssuancesServiceCreateRequest`](StockIssuancesServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`StockIssuancesServiceCreateRequest`](StockIssuancesServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`StockIssuancesServiceCreateRequest`](StockIssuancesServiceCreateRequest.md) \| `PlainMessage`\<[`StockIssuancesServiceCreateRequest`](StockIssuancesServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`StockIssuancesServiceCreateRequest`](StockIssuancesServiceCreateRequest.md) \| `PlainMessage`\<[`StockIssuancesServiceCreateRequest`](StockIssuancesServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/stock_issuances.scailo_pb.ts:289

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`StockIssuancesServiceCreateRequest`](StockIssuancesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`StockIssuancesServiceCreateRequest`](StockIssuancesServiceCreateRequest.md)

#### Defined in

src/stock_issuances.scailo_pb.ts:277

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`StockIssuancesServiceCreateRequest`](StockIssuancesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StockIssuancesServiceCreateRequest`](StockIssuancesServiceCreateRequest.md)

#### Defined in

src/stock_issuances.scailo_pb.ts:281

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`StockIssuancesServiceCreateRequest`](StockIssuancesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StockIssuancesServiceCreateRequest`](StockIssuancesServiceCreateRequest.md)

#### Defined in

src/stock_issuances.scailo_pb.ts:285
