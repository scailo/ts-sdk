[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / StockIssuanceItemProspectiveInfoRequest

# Class: StockIssuanceItemProspectiveInfoRequest

Describes the parameters that are required to retrieve the info of a prospective stock issuance item

**`Generated`**

from message Scailo.StockIssuanceItemProspectiveInfoRequest

## Hierarchy

- `Message`\<[`StockIssuanceItemProspectiveInfoRequest`](StockIssuanceItemProspectiveInfoRequest.md)\>

  ↳ **`StockIssuanceItemProspectiveInfoRequest`**

## Table of contents

### Constructors

- [constructor](StockIssuanceItemProspectiveInfoRequest.md#constructor)

### Properties

- [familyId](StockIssuanceItemProspectiveInfoRequest.md#familyid)
- [stockIssuanceId](StockIssuanceItemProspectiveInfoRequest.md#stockissuanceid)
- [fields](StockIssuanceItemProspectiveInfoRequest.md#fields)
- [runtime](StockIssuanceItemProspectiveInfoRequest.md#runtime)
- [typeName](StockIssuanceItemProspectiveInfoRequest.md#typename)

### Methods

- [clone](StockIssuanceItemProspectiveInfoRequest.md#clone)
- [equals](StockIssuanceItemProspectiveInfoRequest.md#equals)
- [fromBinary](StockIssuanceItemProspectiveInfoRequest.md#frombinary)
- [fromJson](StockIssuanceItemProspectiveInfoRequest.md#fromjson)
- [fromJsonString](StockIssuanceItemProspectiveInfoRequest.md#fromjsonstring)
- [getType](StockIssuanceItemProspectiveInfoRequest.md#gettype)
- [toBinary](StockIssuanceItemProspectiveInfoRequest.md#tobinary)
- [toJSON](StockIssuanceItemProspectiveInfoRequest.md#tojson)
- [toJson](StockIssuanceItemProspectiveInfoRequest.md#tojson-1)
- [toJsonString](StockIssuanceItemProspectiveInfoRequest.md#tojsonstring)
- [equals](StockIssuanceItemProspectiveInfoRequest.md#equals-1)
- [fromBinary](StockIssuanceItemProspectiveInfoRequest.md#frombinary-1)
- [fromJson](StockIssuanceItemProspectiveInfoRequest.md#fromjson-1)
- [fromJsonString](StockIssuanceItemProspectiveInfoRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new StockIssuanceItemProspectiveInfoRequest**(`data?`): [`StockIssuanceItemProspectiveInfoRequest`](StockIssuanceItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`StockIssuanceItemProspectiveInfoRequest`](StockIssuanceItemProspectiveInfoRequest.md)\> |

#### Returns

[`StockIssuanceItemProspectiveInfoRequest`](StockIssuanceItemProspectiveInfoRequest.md)

#### Overrides

Message\&lt;StockIssuanceItemProspectiveInfoRequest\&gt;.constructor

#### Defined in

src/stock_issuances.scailo_pb.ts:1024

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

src/stock_issuances.scailo_pb.ts:1022

___

### stockIssuanceId

• **stockIssuanceId**: `bigint` = `protoInt64.zero`

Stores the stock issuance ID

**`Generated`**

from field: uint64 stock_issuance_id = 10;

#### Defined in

src/stock_issuances.scailo_pb.ts:1015

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/stock_issuances.scailo_pb.ts:1031

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/stock_issuances.scailo_pb.ts:1029

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.StockIssuanceItemProspectiveInfoRequest"``

#### Defined in

src/stock_issuances.scailo_pb.ts:1030

## Methods

### clone

▸ **clone**(): [`StockIssuanceItemProspectiveInfoRequest`](StockIssuanceItemProspectiveInfoRequest.md)

Create a deep copy.

#### Returns

[`StockIssuanceItemProspectiveInfoRequest`](StockIssuanceItemProspectiveInfoRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`StockIssuanceItemProspectiveInfoRequest`](StockIssuanceItemProspectiveInfoRequest.md) \| `PlainMessage`\<[`StockIssuanceItemProspectiveInfoRequest`](StockIssuanceItemProspectiveInfoRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`StockIssuanceItemProspectiveInfoRequest`](StockIssuanceItemProspectiveInfoRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`StockIssuanceItemProspectiveInfoRequest`](StockIssuanceItemProspectiveInfoRequest.md)\>

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
| `a` | `undefined` \| [`StockIssuanceItemProspectiveInfoRequest`](StockIssuanceItemProspectiveInfoRequest.md) \| `PlainMessage`\<[`StockIssuanceItemProspectiveInfoRequest`](StockIssuanceItemProspectiveInfoRequest.md)\> |
| `b` | `undefined` \| [`StockIssuanceItemProspectiveInfoRequest`](StockIssuanceItemProspectiveInfoRequest.md) \| `PlainMessage`\<[`StockIssuanceItemProspectiveInfoRequest`](StockIssuanceItemProspectiveInfoRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/stock_issuances.scailo_pb.ts:1048

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`StockIssuanceItemProspectiveInfoRequest`](StockIssuanceItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`StockIssuanceItemProspectiveInfoRequest`](StockIssuanceItemProspectiveInfoRequest.md)

#### Defined in

src/stock_issuances.scailo_pb.ts:1036

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`StockIssuanceItemProspectiveInfoRequest`](StockIssuanceItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StockIssuanceItemProspectiveInfoRequest`](StockIssuanceItemProspectiveInfoRequest.md)

#### Defined in

src/stock_issuances.scailo_pb.ts:1040

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`StockIssuanceItemProspectiveInfoRequest`](StockIssuanceItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StockIssuanceItemProspectiveInfoRequest`](StockIssuanceItemProspectiveInfoRequest.md)

#### Defined in

src/stock_issuances.scailo_pb.ts:1044
