[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesReturnsServiceItemCreateRequest

# Class: SalesReturnsServiceItemCreateRequest

Describes the parameters required to add an item to a sales return

**`Generated`**

from message Scailo.SalesReturnsServiceItemCreateRequest

## Hierarchy

- `Message`\<[`SalesReturnsServiceItemCreateRequest`](SalesReturnsServiceItemCreateRequest.md)\>

  ↳ **`SalesReturnsServiceItemCreateRequest`**

## Table of contents

### Constructors

- [constructor](SalesReturnsServiceItemCreateRequest.md#constructor)

### Properties

- [clientQuantity](SalesReturnsServiceItemCreateRequest.md#clientquantity)
- [clientUomId](SalesReturnsServiceItemCreateRequest.md#clientuomid)
- [familyId](SalesReturnsServiceItemCreateRequest.md#familyid)
- [internalQuantity](SalesReturnsServiceItemCreateRequest.md#internalquantity)
- [itemHash](SalesReturnsServiceItemCreateRequest.md#itemhash)
- [salesReturnId](SalesReturnsServiceItemCreateRequest.md#salesreturnid)
- [userComment](SalesReturnsServiceItemCreateRequest.md#usercomment)
- [fields](SalesReturnsServiceItemCreateRequest.md#fields)
- [runtime](SalesReturnsServiceItemCreateRequest.md#runtime)
- [typeName](SalesReturnsServiceItemCreateRequest.md#typename)

### Methods

- [clone](SalesReturnsServiceItemCreateRequest.md#clone)
- [equals](SalesReturnsServiceItemCreateRequest.md#equals)
- [fromBinary](SalesReturnsServiceItemCreateRequest.md#frombinary)
- [fromJson](SalesReturnsServiceItemCreateRequest.md#fromjson)
- [fromJsonString](SalesReturnsServiceItemCreateRequest.md#fromjsonstring)
- [getType](SalesReturnsServiceItemCreateRequest.md#gettype)
- [toBinary](SalesReturnsServiceItemCreateRequest.md#tobinary)
- [toJSON](SalesReturnsServiceItemCreateRequest.md#tojson)
- [toJson](SalesReturnsServiceItemCreateRequest.md#tojson-1)
- [toJsonString](SalesReturnsServiceItemCreateRequest.md#tojsonstring)
- [equals](SalesReturnsServiceItemCreateRequest.md#equals-1)
- [fromBinary](SalesReturnsServiceItemCreateRequest.md#frombinary-1)
- [fromJson](SalesReturnsServiceItemCreateRequest.md#fromjson-1)
- [fromJsonString](SalesReturnsServiceItemCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesReturnsServiceItemCreateRequest**(`data?`): [`SalesReturnsServiceItemCreateRequest`](SalesReturnsServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesReturnsServiceItemCreateRequest`](SalesReturnsServiceItemCreateRequest.md)\> |

#### Returns

[`SalesReturnsServiceItemCreateRequest`](SalesReturnsServiceItemCreateRequest.md)

#### Overrides

Message\&lt;SalesReturnsServiceItemCreateRequest\&gt;.constructor

#### Defined in

src/sales_returns.scailo_pb.ts:687

## Properties

### clientQuantity

• **clientQuantity**: `bigint` = `protoInt64.zero`

Stores the quantity (in cents) being dispatched in client's unit of material

**`Generated`**

from field: uint64 client_quantity = 15;

#### Defined in

src/sales_returns.scailo_pb.ts:685

___

### clientUomId

• **clientUomId**: `bigint` = `protoInt64.zero`

Stores the ID of the client's unit of material

**`Generated`**

from field: uint64 client_uom_id = 14;

#### Defined in

src/sales_returns.scailo_pb.ts:678

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

src/sales_returns.scailo_pb.ts:657

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity (in cents) being dispatched in internal unit of material

**`Generated`**

from field: uint64 internal_quantity = 13;

#### Defined in

src/sales_returns.scailo_pb.ts:671

___

### itemHash

• **itemHash**: `string` = `""`

Stores the item hash to be dispatched

**`Generated`**

from field: string item_hash = 12;

#### Defined in

src/sales_returns.scailo_pb.ts:664

___

### salesReturnId

• **salesReturnId**: `bigint` = `protoInt64.zero`

Stores the sales return ID

**`Generated`**

from field: uint64 sales_return_id = 10;

#### Defined in

src/sales_returns.scailo_pb.ts:650

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/sales_returns.scailo_pb.ts:643

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/sales_returns.scailo_pb.ts:694

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/sales_returns.scailo_pb.ts:692

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesReturnsServiceItemCreateRequest"``

#### Defined in

src/sales_returns.scailo_pb.ts:693

## Methods

### clone

▸ **clone**(): [`SalesReturnsServiceItemCreateRequest`](SalesReturnsServiceItemCreateRequest.md)

Create a deep copy.

#### Returns

[`SalesReturnsServiceItemCreateRequest`](SalesReturnsServiceItemCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesReturnsServiceItemCreateRequest`](SalesReturnsServiceItemCreateRequest.md) \| `PlainMessage`\<[`SalesReturnsServiceItemCreateRequest`](SalesReturnsServiceItemCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesReturnsServiceItemCreateRequest`](SalesReturnsServiceItemCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesReturnsServiceItemCreateRequest`](SalesReturnsServiceItemCreateRequest.md)\>

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
| `a` | `undefined` \| [`SalesReturnsServiceItemCreateRequest`](SalesReturnsServiceItemCreateRequest.md) \| `PlainMessage`\<[`SalesReturnsServiceItemCreateRequest`](SalesReturnsServiceItemCreateRequest.md)\> |
| `b` | `undefined` \| [`SalesReturnsServiceItemCreateRequest`](SalesReturnsServiceItemCreateRequest.md) \| `PlainMessage`\<[`SalesReturnsServiceItemCreateRequest`](SalesReturnsServiceItemCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/sales_returns.scailo_pb.ts:716

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesReturnsServiceItemCreateRequest`](SalesReturnsServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesReturnsServiceItemCreateRequest`](SalesReturnsServiceItemCreateRequest.md)

#### Defined in

src/sales_returns.scailo_pb.ts:704

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesReturnsServiceItemCreateRequest`](SalesReturnsServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesReturnsServiceItemCreateRequest`](SalesReturnsServiceItemCreateRequest.md)

#### Defined in

src/sales_returns.scailo_pb.ts:708

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesReturnsServiceItemCreateRequest`](SalesReturnsServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesReturnsServiceItemCreateRequest`](SalesReturnsServiceItemCreateRequest.md)

#### Defined in

src/sales_returns.scailo_pb.ts:712
