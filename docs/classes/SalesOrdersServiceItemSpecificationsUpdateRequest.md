[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesOrdersServiceItemSpecificationsUpdateRequest

# Class: SalesOrdersServiceItemSpecificationsUpdateRequest

Request message for isolating updates strictly to the textual specifications or notes
of a Sales Order line item.
Designed for scenarios where operational instructions change without impacting any
commercial terms, pricing, or quantities.

**`Generated`**

from message Scailo.SalesOrdersServiceItemSpecificationsUpdateRequest

## Hierarchy

- `Message`\<[`SalesOrdersServiceItemSpecificationsUpdateRequest`](SalesOrdersServiceItemSpecificationsUpdateRequest.md)\>

  ↳ **`SalesOrdersServiceItemSpecificationsUpdateRequest`**

## Table of contents

### Constructors

- [constructor](SalesOrdersServiceItemSpecificationsUpdateRequest.md#constructor)

### Properties

- [specifications](SalesOrdersServiceItemSpecificationsUpdateRequest.md#specifications)
- [userComment](SalesOrdersServiceItemSpecificationsUpdateRequest.md#usercomment)
- [uuid](SalesOrdersServiceItemSpecificationsUpdateRequest.md#uuid)
- [fields](SalesOrdersServiceItemSpecificationsUpdateRequest.md#fields)
- [runtime](SalesOrdersServiceItemSpecificationsUpdateRequest.md#runtime)
- [typeName](SalesOrdersServiceItemSpecificationsUpdateRequest.md#typename)

### Methods

- [clone](SalesOrdersServiceItemSpecificationsUpdateRequest.md#clone)
- [equals](SalesOrdersServiceItemSpecificationsUpdateRequest.md#equals)
- [fromBinary](SalesOrdersServiceItemSpecificationsUpdateRequest.md#frombinary)
- [fromJson](SalesOrdersServiceItemSpecificationsUpdateRequest.md#fromjson)
- [fromJsonString](SalesOrdersServiceItemSpecificationsUpdateRequest.md#fromjsonstring)
- [getType](SalesOrdersServiceItemSpecificationsUpdateRequest.md#gettype)
- [toBinary](SalesOrdersServiceItemSpecificationsUpdateRequest.md#tobinary)
- [toJSON](SalesOrdersServiceItemSpecificationsUpdateRequest.md#tojson)
- [toJson](SalesOrdersServiceItemSpecificationsUpdateRequest.md#tojson-1)
- [toJsonString](SalesOrdersServiceItemSpecificationsUpdateRequest.md#tojsonstring)
- [equals](SalesOrdersServiceItemSpecificationsUpdateRequest.md#equals-1)
- [fromBinary](SalesOrdersServiceItemSpecificationsUpdateRequest.md#frombinary-1)
- [fromJson](SalesOrdersServiceItemSpecificationsUpdateRequest.md#fromjson-1)
- [fromJsonString](SalesOrdersServiceItemSpecificationsUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesOrdersServiceItemSpecificationsUpdateRequest**(`data?`): [`SalesOrdersServiceItemSpecificationsUpdateRequest`](SalesOrdersServiceItemSpecificationsUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesOrdersServiceItemSpecificationsUpdateRequest`](SalesOrdersServiceItemSpecificationsUpdateRequest.md)\> |

#### Returns

[`SalesOrdersServiceItemSpecificationsUpdateRequest`](SalesOrdersServiceItemSpecificationsUpdateRequest.md)

#### Overrides

Message\&lt;SalesOrdersServiceItemSpecificationsUpdateRequest\&gt;.constructor

#### Defined in

[src/sales_orders.scailo_pb.ts:2449](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L2449)

## Properties

### specifications

• **specifications**: `string` = `""`

**`Mandatory`**

**`Description`**

The completely overwritten textual requirements, manufacturing notes, or specifications for fulfilling this item.

**`Example`**

```ts
"Expedite handling required. Use pallet configuration A."
```

**`Regex`**

.*

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: string specifications = 21;

#### Defined in

[src/sales_orders.scailo_pb.ts:2447](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L2447)

___

### userComment

• `Optional` **userComment**: `string`

**`Optional`**

**`Description`**

Audit log comment or justification for creating this record. This is stored in the record's history for compliance purposes.

**`Example`**

```ts
"This is a comment for audit purposes."
```

**`Regex`**

.*

**`Format`**

May contain any UTF-8 characters or be left empty.

**`Generated`**

from field: optional string user_comment = 1;

#### Defined in

[src/sales_orders.scailo_pb.ts:2415](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L2415)

___

### uuid

• **uuid**: `string` = `""`

**`Mandatory`**

**`Description`**

The globally unique identifier (UUID) of the target record that needs to be updated.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Regex`**

^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$

**`Format`**

Must be a valid v4 UUID in canonical hyphenated form.

**`Generated`**

from field: string uuid = 2;

#### Defined in

[src/sales_orders.scailo_pb.ts:2431](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L2431)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_orders.scailo_pb.ts:2456](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L2456)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_orders.scailo_pb.ts:2454](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L2454)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesOrdersServiceItemSpecificationsUpdateRequest"``

#### Defined in

[src/sales_orders.scailo_pb.ts:2455](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L2455)

## Methods

### clone

▸ **clone**(): [`SalesOrdersServiceItemSpecificationsUpdateRequest`](SalesOrdersServiceItemSpecificationsUpdateRequest.md)

Create a deep copy.

#### Returns

[`SalesOrdersServiceItemSpecificationsUpdateRequest`](SalesOrdersServiceItemSpecificationsUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesOrdersServiceItemSpecificationsUpdateRequest`](SalesOrdersServiceItemSpecificationsUpdateRequest.md) \| `PlainMessage`\<[`SalesOrdersServiceItemSpecificationsUpdateRequest`](SalesOrdersServiceItemSpecificationsUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesOrdersServiceItemSpecificationsUpdateRequest`](SalesOrdersServiceItemSpecificationsUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesOrdersServiceItemSpecificationsUpdateRequest`](SalesOrdersServiceItemSpecificationsUpdateRequest.md)\>

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
| `a` | `undefined` \| [`SalesOrdersServiceItemSpecificationsUpdateRequest`](SalesOrdersServiceItemSpecificationsUpdateRequest.md) \| `PlainMessage`\<[`SalesOrdersServiceItemSpecificationsUpdateRequest`](SalesOrdersServiceItemSpecificationsUpdateRequest.md)\> |
| `b` | `undefined` \| [`SalesOrdersServiceItemSpecificationsUpdateRequest`](SalesOrdersServiceItemSpecificationsUpdateRequest.md) \| `PlainMessage`\<[`SalesOrdersServiceItemSpecificationsUpdateRequest`](SalesOrdersServiceItemSpecificationsUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_orders.scailo_pb.ts:2474](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L2474)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesOrdersServiceItemSpecificationsUpdateRequest`](SalesOrdersServiceItemSpecificationsUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesOrdersServiceItemSpecificationsUpdateRequest`](SalesOrdersServiceItemSpecificationsUpdateRequest.md)

#### Defined in

[src/sales_orders.scailo_pb.ts:2462](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L2462)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesOrdersServiceItemSpecificationsUpdateRequest`](SalesOrdersServiceItemSpecificationsUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesOrdersServiceItemSpecificationsUpdateRequest`](SalesOrdersServiceItemSpecificationsUpdateRequest.md)

#### Defined in

[src/sales_orders.scailo_pb.ts:2466](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L2466)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesOrdersServiceItemSpecificationsUpdateRequest`](SalesOrdersServiceItemSpecificationsUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesOrdersServiceItemSpecificationsUpdateRequest`](SalesOrdersServiceItemSpecificationsUpdateRequest.md)

#### Defined in

[src/sales_orders.scailo_pb.ts:2470](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L2470)
