[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / StockIssuancesServiceAlreadyAddedQuantityForSourceRequest

# Class: StockIssuancesServiceAlreadyAddedQuantityForSourceRequest

Describes the request payload to retrieve the quantity that has already been added for the specific ref_from, ref_id and family_id

**`Generated`**

from message Scailo.StockIssuancesServiceAlreadyAddedQuantityForSourceRequest

## Hierarchy

- `Message`\<[`StockIssuancesServiceAlreadyAddedQuantityForSourceRequest`](StockIssuancesServiceAlreadyAddedQuantityForSourceRequest.md)\>

  ↳ **`StockIssuancesServiceAlreadyAddedQuantityForSourceRequest`**

## Table of contents

### Constructors

- [constructor](StockIssuancesServiceAlreadyAddedQuantityForSourceRequest.md#constructor)

### Properties

- [familyId](StockIssuancesServiceAlreadyAddedQuantityForSourceRequest.md#familyid)
- [refFrom](StockIssuancesServiceAlreadyAddedQuantityForSourceRequest.md#reffrom)
- [refId](StockIssuancesServiceAlreadyAddedQuantityForSourceRequest.md#refid)
- [fields](StockIssuancesServiceAlreadyAddedQuantityForSourceRequest.md#fields)
- [runtime](StockIssuancesServiceAlreadyAddedQuantityForSourceRequest.md#runtime)
- [typeName](StockIssuancesServiceAlreadyAddedQuantityForSourceRequest.md#typename)

### Methods

- [clone](StockIssuancesServiceAlreadyAddedQuantityForSourceRequest.md#clone)
- [equals](StockIssuancesServiceAlreadyAddedQuantityForSourceRequest.md#equals)
- [fromBinary](StockIssuancesServiceAlreadyAddedQuantityForSourceRequest.md#frombinary)
- [fromJson](StockIssuancesServiceAlreadyAddedQuantityForSourceRequest.md#fromjson)
- [fromJsonString](StockIssuancesServiceAlreadyAddedQuantityForSourceRequest.md#fromjsonstring)
- [getType](StockIssuancesServiceAlreadyAddedQuantityForSourceRequest.md#gettype)
- [toBinary](StockIssuancesServiceAlreadyAddedQuantityForSourceRequest.md#tobinary)
- [toJSON](StockIssuancesServiceAlreadyAddedQuantityForSourceRequest.md#tojson)
- [toJson](StockIssuancesServiceAlreadyAddedQuantityForSourceRequest.md#tojson-1)
- [toJsonString](StockIssuancesServiceAlreadyAddedQuantityForSourceRequest.md#tojsonstring)
- [equals](StockIssuancesServiceAlreadyAddedQuantityForSourceRequest.md#equals-1)
- [fromBinary](StockIssuancesServiceAlreadyAddedQuantityForSourceRequest.md#frombinary-1)
- [fromJson](StockIssuancesServiceAlreadyAddedQuantityForSourceRequest.md#fromjson-1)
- [fromJsonString](StockIssuancesServiceAlreadyAddedQuantityForSourceRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new StockIssuancesServiceAlreadyAddedQuantityForSourceRequest**(`data?`): [`StockIssuancesServiceAlreadyAddedQuantityForSourceRequest`](StockIssuancesServiceAlreadyAddedQuantityForSourceRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`StockIssuancesServiceAlreadyAddedQuantityForSourceRequest`](StockIssuancesServiceAlreadyAddedQuantityForSourceRequest.md)\> |

#### Returns

[`StockIssuancesServiceAlreadyAddedQuantityForSourceRequest`](StockIssuancesServiceAlreadyAddedQuantityForSourceRequest.md)

#### Overrides

Message\&lt;StockIssuancesServiceAlreadyAddedQuantityForSourceRequest\&gt;.constructor

#### Defined in

src/stock_issuances.scailo_pb.ts:1038

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The associated family ID

**`Generated`**

from field: uint64 family_id = 3;

#### Defined in

src/stock_issuances.scailo_pb.ts:1036

___

### refFrom

• **refFrom**: `string` = `""`

The associated reference

**`Generated`**

from field: string ref_from = 1;

#### Defined in

src/stock_issuances.scailo_pb.ts:1022

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 2;

#### Defined in

src/stock_issuances.scailo_pb.ts:1029

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/stock_issuances.scailo_pb.ts:1045

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/stock_issuances.scailo_pb.ts:1043

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.StockIssuancesServiceAlreadyAddedQuantityForSourceRequest"``

#### Defined in

src/stock_issuances.scailo_pb.ts:1044

## Methods

### clone

▸ **clone**(): [`StockIssuancesServiceAlreadyAddedQuantityForSourceRequest`](StockIssuancesServiceAlreadyAddedQuantityForSourceRequest.md)

Create a deep copy.

#### Returns

[`StockIssuancesServiceAlreadyAddedQuantityForSourceRequest`](StockIssuancesServiceAlreadyAddedQuantityForSourceRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`StockIssuancesServiceAlreadyAddedQuantityForSourceRequest`](StockIssuancesServiceAlreadyAddedQuantityForSourceRequest.md) \| `PlainMessage`\<[`StockIssuancesServiceAlreadyAddedQuantityForSourceRequest`](StockIssuancesServiceAlreadyAddedQuantityForSourceRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`StockIssuancesServiceAlreadyAddedQuantityForSourceRequest`](StockIssuancesServiceAlreadyAddedQuantityForSourceRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`StockIssuancesServiceAlreadyAddedQuantityForSourceRequest`](StockIssuancesServiceAlreadyAddedQuantityForSourceRequest.md)\>

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
| `a` | `undefined` \| [`StockIssuancesServiceAlreadyAddedQuantityForSourceRequest`](StockIssuancesServiceAlreadyAddedQuantityForSourceRequest.md) \| `PlainMessage`\<[`StockIssuancesServiceAlreadyAddedQuantityForSourceRequest`](StockIssuancesServiceAlreadyAddedQuantityForSourceRequest.md)\> |
| `b` | `undefined` \| [`StockIssuancesServiceAlreadyAddedQuantityForSourceRequest`](StockIssuancesServiceAlreadyAddedQuantityForSourceRequest.md) \| `PlainMessage`\<[`StockIssuancesServiceAlreadyAddedQuantityForSourceRequest`](StockIssuancesServiceAlreadyAddedQuantityForSourceRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/stock_issuances.scailo_pb.ts:1063

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`StockIssuancesServiceAlreadyAddedQuantityForSourceRequest`](StockIssuancesServiceAlreadyAddedQuantityForSourceRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`StockIssuancesServiceAlreadyAddedQuantityForSourceRequest`](StockIssuancesServiceAlreadyAddedQuantityForSourceRequest.md)

#### Defined in

src/stock_issuances.scailo_pb.ts:1051

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`StockIssuancesServiceAlreadyAddedQuantityForSourceRequest`](StockIssuancesServiceAlreadyAddedQuantityForSourceRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StockIssuancesServiceAlreadyAddedQuantityForSourceRequest`](StockIssuancesServiceAlreadyAddedQuantityForSourceRequest.md)

#### Defined in

src/stock_issuances.scailo_pb.ts:1055

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`StockIssuancesServiceAlreadyAddedQuantityForSourceRequest`](StockIssuancesServiceAlreadyAddedQuantityForSourceRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StockIssuancesServiceAlreadyAddedQuantityForSourceRequest`](StockIssuancesServiceAlreadyAddedQuantityForSourceRequest.md)

#### Defined in

src/stock_issuances.scailo_pb.ts:1059
