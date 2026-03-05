[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesOrdersServiceItemTermsUpdateRequest

# Class: SalesOrdersServiceItemTermsUpdateRequest

**`Generated`**

from message Scailo.SalesOrdersServiceItemTermsUpdateRequest

## Hierarchy

- `Message`\<[`SalesOrdersServiceItemTermsUpdateRequest`](SalesOrdersServiceItemTermsUpdateRequest.md)\>

  ↳ **`SalesOrdersServiceItemTermsUpdateRequest`**

## Table of contents

### Constructors

- [constructor](SalesOrdersServiceItemTermsUpdateRequest.md#constructor)

### Properties

- [deliveryDate](SalesOrdersServiceItemTermsUpdateRequest.md#deliverydate)
- [discount](SalesOrdersServiceItemTermsUpdateRequest.md#discount)
- [specifications](SalesOrdersServiceItemTermsUpdateRequest.md#specifications)
- [taxGroupId](SalesOrdersServiceItemTermsUpdateRequest.md#taxgroupid)
- [unitPrice](SalesOrdersServiceItemTermsUpdateRequest.md#unitprice)
- [userComment](SalesOrdersServiceItemTermsUpdateRequest.md#usercomment)
- [uuid](SalesOrdersServiceItemTermsUpdateRequest.md#uuid)
- [fields](SalesOrdersServiceItemTermsUpdateRequest.md#fields)
- [runtime](SalesOrdersServiceItemTermsUpdateRequest.md#runtime)
- [typeName](SalesOrdersServiceItemTermsUpdateRequest.md#typename)

### Methods

- [clone](SalesOrdersServiceItemTermsUpdateRequest.md#clone)
- [equals](SalesOrdersServiceItemTermsUpdateRequest.md#equals)
- [fromBinary](SalesOrdersServiceItemTermsUpdateRequest.md#frombinary)
- [fromJson](SalesOrdersServiceItemTermsUpdateRequest.md#fromjson)
- [fromJsonString](SalesOrdersServiceItemTermsUpdateRequest.md#fromjsonstring)
- [getType](SalesOrdersServiceItemTermsUpdateRequest.md#gettype)
- [toBinary](SalesOrdersServiceItemTermsUpdateRequest.md#tobinary)
- [toJSON](SalesOrdersServiceItemTermsUpdateRequest.md#tojson)
- [toJson](SalesOrdersServiceItemTermsUpdateRequest.md#tojson-1)
- [toJsonString](SalesOrdersServiceItemTermsUpdateRequest.md#tojsonstring)
- [equals](SalesOrdersServiceItemTermsUpdateRequest.md#equals-1)
- [fromBinary](SalesOrdersServiceItemTermsUpdateRequest.md#frombinary-1)
- [fromJson](SalesOrdersServiceItemTermsUpdateRequest.md#fromjson-1)
- [fromJsonString](SalesOrdersServiceItemTermsUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesOrdersServiceItemTermsUpdateRequest**(`data?`): [`SalesOrdersServiceItemTermsUpdateRequest`](SalesOrdersServiceItemTermsUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesOrdersServiceItemTermsUpdateRequest`](SalesOrdersServiceItemTermsUpdateRequest.md)\> |

#### Returns

[`SalesOrdersServiceItemTermsUpdateRequest`](SalesOrdersServiceItemTermsUpdateRequest.md)

#### Overrides

Message\&lt;SalesOrdersServiceItemTermsUpdateRequest\&gt;.constructor

#### Defined in

[src/sales_orders.scailo_pb.ts:1537](https://github.com/scailo/ts-sdk/blob/fbb7c93f58dd349646e9364e777b3b087e3456a8/src/sales_orders.scailo_pb.ts#L1537)

## Properties

### deliveryDate

• **deliveryDate**: `string` = `""`

The delivery date of the item

**`Generated`**

from field: string delivery_date = 20;

#### Defined in

[src/sales_orders.scailo_pb.ts:1528](https://github.com/scailo/ts-sdk/blob/fbb7c93f58dd349646e9364e777b3b087e3456a8/src/sales_orders.scailo_pb.ts#L1528)

___

### discount

• **discount**: `bigint` = `protoInt64.zero`

The applicable discount percentage (in cents)

**`Generated`**

from field: uint64 discount = 19;

#### Defined in

[src/sales_orders.scailo_pb.ts:1521](https://github.com/scailo/ts-sdk/blob/fbb7c93f58dd349646e9364e777b3b087e3456a8/src/sales_orders.scailo_pb.ts#L1521)

___

### specifications

• **specifications**: `string` = `""`

The specifications that should be updated

**`Generated`**

from field: string specifications = 21;

#### Defined in

[src/sales_orders.scailo_pb.ts:1535](https://github.com/scailo/ts-sdk/blob/fbb7c93f58dd349646e9364e777b3b087e3456a8/src/sales_orders.scailo_pb.ts#L1535)

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

The ID of the associated tax group

**`Generated`**

from field: uint64 tax_group_id = 18;

#### Defined in

[src/sales_orders.scailo_pb.ts:1514](https://github.com/scailo/ts-sdk/blob/fbb7c93f58dd349646e9364e777b3b087e3456a8/src/sales_orders.scailo_pb.ts#L1514)

___

### unitPrice

• **unitPrice**: `bigint` = `protoInt64.zero`

The unit price of the item

**`Generated`**

from field: uint64 unit_price = 17;

#### Defined in

[src/sales_orders.scailo_pb.ts:1507](https://github.com/scailo/ts-sdk/blob/fbb7c93f58dd349646e9364e777b3b087e3456a8/src/sales_orders.scailo_pb.ts#L1507)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/sales_orders.scailo_pb.ts:1493](https://github.com/scailo/ts-sdk/blob/fbb7c93f58dd349646e9364e777b3b087e3456a8/src/sales_orders.scailo_pb.ts#L1493)

___

### uuid

• **uuid**: `string` = `""`

The UUID of the record

**`Generated`**

from field: string uuid = 2;

#### Defined in

[src/sales_orders.scailo_pb.ts:1500](https://github.com/scailo/ts-sdk/blob/fbb7c93f58dd349646e9364e777b3b087e3456a8/src/sales_orders.scailo_pb.ts#L1500)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_orders.scailo_pb.ts:1544](https://github.com/scailo/ts-sdk/blob/fbb7c93f58dd349646e9364e777b3b087e3456a8/src/sales_orders.scailo_pb.ts#L1544)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_orders.scailo_pb.ts:1542](https://github.com/scailo/ts-sdk/blob/fbb7c93f58dd349646e9364e777b3b087e3456a8/src/sales_orders.scailo_pb.ts#L1542)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesOrdersServiceItemTermsUpdateRequest"``

#### Defined in

[src/sales_orders.scailo_pb.ts:1543](https://github.com/scailo/ts-sdk/blob/fbb7c93f58dd349646e9364e777b3b087e3456a8/src/sales_orders.scailo_pb.ts#L1543)

## Methods

### clone

▸ **clone**(): [`SalesOrdersServiceItemTermsUpdateRequest`](SalesOrdersServiceItemTermsUpdateRequest.md)

Create a deep copy.

#### Returns

[`SalesOrdersServiceItemTermsUpdateRequest`](SalesOrdersServiceItemTermsUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesOrdersServiceItemTermsUpdateRequest`](SalesOrdersServiceItemTermsUpdateRequest.md) \| `PlainMessage`\<[`SalesOrdersServiceItemTermsUpdateRequest`](SalesOrdersServiceItemTermsUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesOrdersServiceItemTermsUpdateRequest`](SalesOrdersServiceItemTermsUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesOrdersServiceItemTermsUpdateRequest`](SalesOrdersServiceItemTermsUpdateRequest.md)\>

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
| `a` | `undefined` \| [`SalesOrdersServiceItemTermsUpdateRequest`](SalesOrdersServiceItemTermsUpdateRequest.md) \| `PlainMessage`\<[`SalesOrdersServiceItemTermsUpdateRequest`](SalesOrdersServiceItemTermsUpdateRequest.md)\> |
| `b` | `undefined` \| [`SalesOrdersServiceItemTermsUpdateRequest`](SalesOrdersServiceItemTermsUpdateRequest.md) \| `PlainMessage`\<[`SalesOrdersServiceItemTermsUpdateRequest`](SalesOrdersServiceItemTermsUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_orders.scailo_pb.ts:1566](https://github.com/scailo/ts-sdk/blob/fbb7c93f58dd349646e9364e777b3b087e3456a8/src/sales_orders.scailo_pb.ts#L1566)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesOrdersServiceItemTermsUpdateRequest`](SalesOrdersServiceItemTermsUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesOrdersServiceItemTermsUpdateRequest`](SalesOrdersServiceItemTermsUpdateRequest.md)

#### Defined in

[src/sales_orders.scailo_pb.ts:1554](https://github.com/scailo/ts-sdk/blob/fbb7c93f58dd349646e9364e777b3b087e3456a8/src/sales_orders.scailo_pb.ts#L1554)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesOrdersServiceItemTermsUpdateRequest`](SalesOrdersServiceItemTermsUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesOrdersServiceItemTermsUpdateRequest`](SalesOrdersServiceItemTermsUpdateRequest.md)

#### Defined in

[src/sales_orders.scailo_pb.ts:1558](https://github.com/scailo/ts-sdk/blob/fbb7c93f58dd349646e9364e777b3b087e3456a8/src/sales_orders.scailo_pb.ts#L1558)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesOrdersServiceItemTermsUpdateRequest`](SalesOrdersServiceItemTermsUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesOrdersServiceItemTermsUpdateRequest`](SalesOrdersServiceItemTermsUpdateRequest.md)

#### Defined in

[src/sales_orders.scailo_pb.ts:1562](https://github.com/scailo/ts-sdk/blob/fbb7c93f58dd349646e9364e777b3b087e3456a8/src/sales_orders.scailo_pb.ts#L1562)
